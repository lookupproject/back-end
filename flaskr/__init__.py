from flask import Flask, render_template, request, redirect
from urllib.parse import urljoin
import os


def create_app(test_config=None):
  app = Flask(__name__, instance_relative_config=True)

  uri = os.getenv("DATABASE_URL")
  if uri and uri.startswith("postgres://"):
    uri = uri.replace("postgres://", "postgresql://", 1)

  if os.getenv("MODE") == 'Production':
    static_url = os.getenv("STATIC_URL")
    app.config['STATIC_URL'] = static_url

  app.config.from_mapping(
    SECRET_KEY='192b9bdd22ab9ed4d12e236c78afcb9a393ec15f71bbf5dc987d54727823bcbf',
    SQLALCHEMY_DATABASE_URI = uri,
    SQLALCHEMY_TRACK_MODIFICATIONS = False,
  )

  from flaskr.login import login
  from flaskr.models import db
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

  @app.endpoint('static')
  def static(filename):
    static_url = app.config.get('STATIC_URL')

    if static_url:
      print(urljoin(static_url, filename))
      return redirect(urljoin(static_url, filename))

    return app.send_static_file(filename)

  return app

