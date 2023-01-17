import functools
from flask import (
    Blueprint, flash, redirect, render_template, url_for
)
from .forms import RegistrationForm, LoginForm
from flask_login import current_user, login_user, logout_user
from .models import User
from werkzeug.urls import url_parse
from . import db
from .utils import generate_image_url

bp = Blueprint('auth', __name__ , url_prefix='/auth')

@bp.route('/login', methods=['GET', 'POST'])
def login():
  if current_user.is_authenticated:
    return redirect(url_for('home.home'))

  form = LoginForm()
  if form.validate_on_submit():
    user = User.query.filter_by(username = form.username.data).first()

    if user is None:
      flash('Incorrect username.')
      return redirect(url_for('auth.login'))
    
    '''
     If incorrect password flashes error message and redirects for a new try
    TODO: Implement wrong username or password as one conditional
     '''
    if not user.check_password_hash(form.password.data):
      flash('Incorrect password.')
      return redirect(url_for('auth.login'))

    login_user(user, remember=form.remember_me.data)
    return redirect(url_for('home.home'))

  return render_template("auth/login.html", title = 'Sign In', form = form)

@bp.route('/signup', methods=['GET', 'POST'])
def signup():
  form = RegistrationForm()

  if form.validate_on_submit():
    img = generate_image_url()
    user = User(
        username = form.username.data, 
        email = form.email.data, 
        img=img, 
        path=[{"Physical Science": 1, "Life Science": 1, "Earth Science": 1}]
    )
    user.set_password(form.password.data)

    db.session.add(user)
    db.session.commit()

    flash('Congrats! You are now a registered user.')
    return redirect(url_for('auth.login'))

  return render_template("auth/signup.html", form = form)


@bp.route('/logout')
def logout():
  logout_user()
  return redirect(url_for('home.landing'))
