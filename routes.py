from http.client import HTTPResponse
from app import app, db, load_user
from models import User, Course, Progress
from utils import generate_image_url, openai_response, sort

from flask import flash, redirect, render_template, request, url_for
from flask_login import current_user, login_required, login_user, user_accessed, logout_user
from werkzeug.urls import url_parse
from forms import RegistrationForm, LoginForm

from sqlalchemy.orm.exc import NoResultFound

@app.route('/', methods=['GET', 'POST'])
def landing():
  return render_template("landing.html")

@app.route('/login', methods=['GET', 'POST'])
def login():
  # If current_user is logged in, redirects to home
  if current_user.is_authenticated:
    return redirect(url_for('home'))

  # Instantiate LoginForm for user to login
  form = LoginForm()

  # Assigns LoginForm data to user when form is submitted
  if form.validate_on_submit():
    user = User.query.filter_by(username = form.username.data).first()

    # If no username flashes error message and redirects for a new try
    if user is None:
      flash('Incorrect username.')
      return redirect(url_for('login'))
    
    '''
     If incorrect password flashes error message and redirects for a new try
    TODO: Implement wrong username or password as one conditional
     '''
    if not user.check_password_hash(form.password.data):
      flash('Incorrect password.')
      return redirect(url_for('login'))

    login_user(user, remember=form.remember_me.data)
    next_page = request.args.get('next')

    if not next_page or url_parse(next_page).netloc != '':
      next_page = url_for('home')

    # Redirects to next_page
    return redirect(url_for('home'))

  return render_template("log-in.html", title = 'Sign In', form = form)

@app.route('/signup', methods=['GET', 'POST'])
def sign_up():
  # Instantiate RegistrationForm for user to login
  form = RegistrationForm()

  # Asign data when form is submitted
  if form.validate_on_submit():
    img = generate_image_url()
    user = User(username = form.username.data, email = form.email.data, img=img)
    user.set_password(form.password.data)

    # Add data to database and commits
    db.session.add(user)
    db.session.commit()

    # Flash message after commit
    flash('Congrats! You are now a registered user.')
    return redirect(url_for('login'))

  return render_template("sign-up.html", form = form)


@app.route('/home', methods=['GET', 'POST'])
@login_required
def home():
  return render_template("home.html")

@app.route('/path', methods=['GET', 'POST'])
@login_required
def path():
  return render_template("path.html")

@app.route('/seasons', methods=['GET', 'POST'])
@login_required
def seasons():
  return render_template("seasons.html")

@app.route('/community', methods=['GET', 'POST'])
@login_required
def community():
  page = db.session.query(Course).filter_by(creator_id=current_user.id).paginate(per_page=4)
  return render_template("community.html", page=page, user_id=current_user.id)

@app.route('/my-profile', methods=['GET', 'POST'])
@login_required
def user_profile():
  return render_template("user-profile.html")

@app.route('/about-us', methods=['GET', 'POST'])
@login_required
def aboutus():
  return render_template("about-us.html")

@app.route('/log-out')
def logout():
  logout_user()
  return redirect(url_for('login'))
  
@app.route('/<id>/play', methods=['GET', 'POST'])
@login_required
def viewer(id):
  return render_template("viewer.html")

@app.route('/<id>/edit', methods=['GET'])
@login_required
def creator(id):
  course = db.session.query(Course).filter_by(id=id).first()

  if current_user.id == course.creator_id:
    return(render_template("creator.html"))
  else:
    return("<h1>You are not the creator</h1>")

@app.route('/create', methods=['POST'])
def create_course():
  course = Course(name='Untitled', content={}, creator_id=current_user.id)
  db.session.add(course)
  db.session.commit()
  return redirect(url_for('creator', id=course.id))

@app.route('/<id>/delete', methods=['GET'])
def delete(id):
  db.session.delete(db.session.query(Course).get(id))

  db.session.commit()
  return redirect(url_for('community'))

@app.route('/course/<id>', methods=['GET', 'POST'])
def course(id):
  course = db.session.query(Course).get_or_404(id)

  if request.method == "POST":
    dict = request.get_json()

    if dict['name'] == "":
      return ('Not new data')

    course.name = dict['name']
    course.content = dict['data']
    course.version = dict['version']
    db.session.commit()
    return ('Success')
  else:
    return {
      "name": course.name,
      "content": course.content,
      "version": course.version
}


@app.route('/progress/<course_id>', methods=['GET', 'POST'])
def progress(course_id):
  progress = db.session.query(Progress).filter_by(user_id=current_user.id, course_id=course_id).first()
  course = db.session.query(Course).get_or_404(course_id)

  if request.method == "POST":
    dict = request.get_json()
    if dict['progress'] == []:
      return ("No new data")
    else:
      progress.progress = dict['progress']
      db.session.commit()
      return ("Success")

  if progress is None:
    print("CREATING NEW PROGRESS ROW", progress)
    progress = Progress(user_id=current_user.id, course_id=course_id, progress=[], version=course.version)

    for item in course.content:
      if item['type'] == 'Question':
        progress.progress.append({"viewed": False, "answer": "", "feedback": "", "id": item['id']})
      else:
        progress.progress.append({"viewed": False, "id": item['id']})

    db.session.add(progress)
    db.session.commit()

  if progress.version != course.version:
    sort(progress, course)
    db.session.commit()

  return {
    "name": course.name,
    "course": course.content,
    "progress": progress.progress,
  }

@app.route('/api/feedback', methods=['POST'])
def feedback():
  dict = request.get_json()
  return {"feedback": openai_response(dict['context'], dict['question'], dict['answer'])}
