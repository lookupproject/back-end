from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from app import db, login
from sqlalchemy import ForeignKey, Column, String, Integer, JSON
from sqlalchemy.orm import relationship
from sqlalchemy_json import mutable_json_type
from sqlalchemy.dialects.postgresql import JSONB

class User(UserMixin, db.Model):
  __tablename__ = 'users'
  id = Column(Integer, index=True, primary_key=True)
  username = Column(String(25), index=True, unique=True)
  email = Column(String(120), index=True, unique=True)
  img = Column(String(300),index=False, unique=False)
  password_hash = Column(String(128))

  courses = relationship('Course', backref='user', lazy='dynamic', cascade="all, delete-orphan")
  progress = relationship('Progress', backref='user', lazy='dynamic', cascade="all, delete-orphan")

  def __repr__(self):
    return 'User: {}'.format(self.username)

  def set_password(self, password):
    '''Sets password for current user'''
    self.password_hash = generate_password_hash(password)

  def check_password_hash(self, password):
    return check_password_hash(self.password_hash, password)

class Course(db.Model):
  __tablename__ = 'courses'
  id = Column(Integer, primary_key = True, index = True)
  name = Column(String(25), index = True)
  version = Column(Integer, index = True)
  content = Column(mutable_json_type(dbtype=JSONB, nested=True))
  creator_id = Column(Integer, ForeignKey('users.id'))

  progress = relationship('Progress', backref='course', lazy='dynamic', cascade="all, delete-orphan")

  def __repr__(self):
    return "Course Name: {}".format(self.name)

class Progress(db.Model):
  __tablename__ = 'progress'
  id = Column(Integer, primary_key = True)
  version = Column(Integer, index = True)
  progress = Column(mutable_json_type(dbtype=JSONB, nested=True))
  
  user_id = Column(Integer, ForeignKey('users.id'))
  course_id = Column(Integer, ForeignKey('courses.id'))

  def __repr__(self):
    return "You have a progress of: {}.".format(self.progress)
