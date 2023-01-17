from flask import (
    Blueprint, render_template, request, redirect, url_for
)
from flask_login import current_user
from flaskr.utils import divergent_evaluator, classifier, content_evaluator, sort
from flaskr import db
from flaskr.models import Course, User, Progress

bp = Blueprint('api', __name__, url_prefix='/api')

@bp.route('/feedback', methods=['POST'])
def fetch_feedback():
  dict = request.get_json()

  if (dict['questionType'] == 'Fact Recall' or dict['questionType'] == 'Low Convergent' or dict['questionType'] == 'High Convergent'):
    return { "feedback": content_evaluator(dict['text'], dict['answer']) }
  elif (dict['questionType'] == 'Low Divergent' or dict['questionType'] == 'High Divergent'):
    return {"feedback": divergent_evaluator(dict['text'], dict['answer']) }
  else:
    return {"feedback": "" }

@bp.route('/classifier', methods=['POST'])
def fetch_classifier():
  dict = request.get_json()
  if dict['prompt'].strip() == '':
    return { "type": '...' }
  return { "type" : classifier(dict['prompt'])}

@bp.route('/create', methods=['POST'])
def create_course():
  course = Course(name='Untitled', content={}, creator_id=current_user.id, classification='Life Science')
  db.session.add(course)
  db.session.commit()
  return redirect(url_for('home.creator', id=course.id))

@bp.route('/delete/<int:id>', methods=['GET'])
def delete(id):
  db.session.delete(db.session.query(Course).get(id))

  db.session.commit()
  return redirect(url_for('home.community'))

@bp.route('/course/<int:id>', methods=['GET', 'POST'])
def course(id):
  course = db.session.query(Course).get_or_404(id)
  user = db.session.query(User).get(current_user.id)

  if request.method == "POST":
    dict = request.get_json()

    if dict['name'] == "":
      return ('Not new data')

    course.name = dict['name']
    course.content = dict['data']
    course.version = dict['version']
    course.classification = dict['classification']
    db.session.commit()
    return ('Success')
  else:
    return {
      "name": course.name,
      "picUrl": user.img,
      "classification": course.classification,
      "content": course.content,
      "version": course.version
}


@bp.route('/progress/<int:course_id>', methods=['GET', 'POST'])
def progress(course_id):
  progress = db.session.query(Progress).filter_by(user_id=current_user.id, course_id=course_id).first()
  course = db.session.query(Course).get_or_404(course_id)
  user = db.session.query(User).get(current_user.id)

  if request.method == "POST":
    dict = request.get_json()
    if dict['progress'] == []:
      return ("No new data")
    else:
      progress.progress = dict['progress']

      if dict['finished']:
        progress.finished = True

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
    "picUrl": user.img, 
    "type": course.classification,
    "course": course.content,
    "progress": progress.progress,
  }