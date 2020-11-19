from flask import render_template, url_for, flash, redirect,request
from flaskblog import app,db,bcrypt
from flaskblog.forms import RegistrationForm, LoginForm
from flaskblog.models import User, Post
from flask_login import login_user



@app.route("/")
@app.route("/home")
def home():
    return render_template('home.html', )


@app.route("/about")
def about():
    return render_template('aboutus.html', title='About')




@app.route("/event")
def event():
    return render_template('event.html', title='Events')

@app.route("/team")
def team():
    return render_template('team.html', title='The Team')

@app.route("/contactform")
def contform():
    return render_template('contactform.html', title='ContactForm')

@app.route("/register", methods=['GET', 'POST'])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        hashed_pw=bcrypt.generate_password_hash(form.password.data).decode('utf-8')
        user=User(username=form.username.data,email=form.email.data,password=hashed_pw)
        db.session.add(user)
        db.session.commit()
        flash('Your account has been created!', 'success')
        return redirect(url_for('login'))
    return render_template('register.html', title='Register', form=form)


@app.route("/login", methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        user=User.query.filer_by(email=form.email.data).first()
        if user and bcrypt.check_password_hash(user.data,form.password.data):
            login_user(user,remember=form.remember.data)
            return redirect(url_for('home'))
        else:
            flash('Login Unsuccessful. Please check email and password', 'danger')
    return render_template('login.html', title='Login', form=form)