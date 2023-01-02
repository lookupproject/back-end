from flask import Flask, render_template, request
from sqlalchemy import create_engine
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, current_user, login_user, logout_user, login_required
import os
import openai

openai.api_key = "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"

app = Flask(__name__)
app.config['SECRET_KEY'] = 'mysecret'

# Change postgres to postgresql
uri = os.getenv("DATABASE_URL")
if uri and uri.startswith("postgres://"):
    uri = uri.replace("postgres://", "postgresql://", 1)

app.config['SQLALCHEMY_DATABASE_URI'] = uri or 'postgresql+psycopg2://postgres:MajorTom69!@localhost/lookup'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app) # Links library with my app

login = LoginManager()
login.init_app(app)
login.login_view = 'login'

@login.user_loader
def load_user(id):
  return User.query.get(int(id))

@login.unauthorized_handler
def unauthorized():
  return render_template("no-user.html")

# Need to be placed at the end
from models import User
import routes