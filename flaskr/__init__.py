from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, current_user, login_user, logout_user, login_required
import os

db = SQLAlchemy()
login = LoginManager()

def create_app(test_config=None):
  app = Flask(__name__, instance_relative_config=True)

  uri = os.getenv("DATABASE_URL")
  if uri and uri.startswith("postgres://"):
    uri = uri.replace("postgres://", "postgresql://", 1)

  static_url = app.static_folder
  if os.getenv("MODE") == 'Production':
    static_url = os.getenv("STATIC_URL")

  app.config.from_mapping(
    SECRET_KEY='192b9bdd22ab9ed4d12e236c78afcb9a393ec15f71bbf5dc987d54727823bcbf',
    SQLALCHEMY_DATABASE_URI = uri,
    SQLALCHEMY_TRACK_MODIFICATIONS = False,
    STATIC_URL=static_url
  )

  login.init_app(app)
  login.login_view = 'login'

  db.init_app(app)

  if test_config is None:
    # load the instance config, if it exists, when not testing
    app.config.from_pyfile('config.py', silent=True)
  else:
    # load the test config if passed in
    app.config.from_mapping(test_config)

  # ensure the instance folder exists
  try:
    os.makedirs(app.instance_path)
  except OSError:
    pass


  from flaskr import auth, api, home
  app.register_blueprint(auth.bp)
  app.register_blueprint(api.bp)
  app.register_blueprint(home.bp)

  @login.user_loader
  def load_user(id):
    return User.query.get(int(id))

  @login.unauthorized_handler
  def unauthorized():
    return render_template("no-user.html")

  # Need to be placed at the end
  from flaskr.models import User

  return app

