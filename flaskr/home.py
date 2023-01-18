from flask import (
    Blueprint, render_template, request, redirect
)
from flask_login import current_user, login_required
from urllib.parse import urljoin
from flaskr.models import db
from flaskr.models import User, Course, Progress

bp = Blueprint('home', __name__)

@bp.route('/home', methods=['GET', 'POST'])
@login_required
def home():
  if request.method == "POST":
    user = db.session.query(User).get(current_user.id)
    lsp = db.session.query(Course).join(Progress).filter(
                                                            Course.classification=='Life Science', 
                                                            Progress.user_id==current_user.id, 
                                                            Progress.finished==True
                                                        ).paginate(per_page=10)
    esp = db.session.query(Course).join(Progress).filter(
                                                            Course.classification=='Earth Science', 
                                                            Progress.user_id==current_user.id, 
                                                            Progress.finished==True
                                                        ).paginate(per_page=10)
    psp = db.session.query(Course).join(Progress).filter(
                                                            Course.classification=='Physical Science', 
                                                            Progress.user_id==current_user.id, 
                                                            Progress.finished==True
                                                        ).paginate(per_page=10)

    user.path =   {
      "Life Science": len(lsp.items),
      "Earth Science": len(esp.items),
      "Physical Science": len(psp.items)
    }

    db.session.commit()
    
    return { "username": user.username, 
             "lsp": len(lsp.items), 
             "esp": len(esp.items), 
             "psp": len(psp.items) }
  return render_template("home/home.html")

@bp.route('/path', methods=['GET', 'POST'])
@login_required
def path():
  page = db.session.query(Course).join(Progress).filter(Progress.user_id==current_user.id).paginate(per_page=10)

  return render_template("home/path.html", page=page, db=db, User=User)

@bp.route('/branches', methods=['GET'])
@login_required
def branches():
  lsp = db.session.query(Course).join(Progress).filter(
                                                        Course.classification=='Life Science', 
                                                        Progress.user_id==current_user.id, 
                                                        Progress.finished==True
                                                      ).paginate(per_page=10)
  esp = db.session.query(Course).join(Progress).filter(
                                                        Course.classification=='Earth Science', 
                                                        Progress.user_id==current_user.id, 
                                                        Progress.finished==True
                                                      ).paginate(per_page=10)
  psp = db.session.query(Course).join(Progress).filter(
                                                        Course.classification=='Physical Science', 
                                                        Progress.user_id==current_user.id, 
                                                        Progress.finished==True
                                                      ).paginate(per_page=10)
  return render_template("home/branches.html", lsp=lsp, esp=esp, psp=psp)

@bp.route('/community', methods=['GET', 'POST'])
@login_required
def community():
  page = request.args.get('p', 1, type=int)
  user_courses_page = db.session.query(Course).filter_by(creator_id=current_user.id).paginate(per_page=4)
  course_page = db.session.query(Course).filter(Course.creator_id!=current_user.id).paginate(page=page, per_page=12)

  return render_template("home/community.html", 
  user_courses_page=user_courses_page, 
  course_page=course_page,
  user_id=current_user.id, 
  db=db,
  User=User)

@bp.route('/', methods=['GET', 'POST'])
def landing():
  return render_template("landing/landing.html")

@bp.route('/my-profile', methods=['GET', 'POST'])
@login_required
def user_profile():
  return render_template("user-profile.html")

@bp.route('/about-us', methods=['GET', 'POST'])
@login_required
def aboutus():
  return render_template("about-us.html")
  
@bp.route('/<id>/play', methods=['GET', 'POST'])
@login_required
def viewer(id):
  return render_template("courses/viewer.html")

@bp.route('/<id>/edit', methods=['GET'])
@login_required
def creator(id):
  course = db.session.query(Course).filter_by(id=id).first()

  if current_user.id == course.creator_id:
    return(render_template("courses/creator.html"))
  else:
    return("<h1>You are not the creator</h1>")

@bp.errorhandler(404)
def page_not_found(error):
  return render_template('page_not_found.html'), 404

