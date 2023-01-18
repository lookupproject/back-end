from flask_login import LoginManager
from flask import render_template

login = LoginManager()

@login.user_loader
def load_user(id):
  return User.query.get(int(id))

@login.unauthorized_handler
def unauthorized():
  return render_template("no-user.html")

# Need to be placed at the end
from flaskr.models import User