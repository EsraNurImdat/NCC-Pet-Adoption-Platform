from flask import Flask
from flask import Flask, request, session, redirect, url_for, jsonify
from flask import *

#PostgreSQL database adapter for the Python
import psycopg2 #pip install psycopg2 
from flask_cors import CORS
import re 

from sqlalchemy import text
from flask_sqlalchemy import SQLAlchemy



app = Flask(__name__)
app.secret_key = "super secret key"

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:esrazeycanserra@pet-database.crlioocavuh9.us-east-1.rds.amazonaws.com:5432/pet_adoption_db'
db = SQLAlchemy(app)


CORS(app) 


@app.route('/')
def home():
    query = text("SELECT email, firstname, lastname, password FROM users;")
    result = db.session.execute(query)
    user = result.fetchall()
    
    print(user)


 
@app.route('/register', methods=['POST'])
def register():

    data = request.get_json()

    email = data.get('email')
    firstname = data.get('firstName')
    lastname = data.get('lastName')
    password = data.get('password')


    query = text("SELECT email, firstname, lastname, password FROM users WHERE email = :email")
    result = db.session.execute(query, {"email": email})
    user = result.fetchone()

    print(f"Data to be inserted: {firstname}, {lastname}, {password}, {email}")

    if not firstname or not lastname or not password or not email or not any([firstname, lastname, password, email]):
        return jsonify({'message': 'Please fill out the form!'}), 400

    elif user:
        return jsonify({'message': 'Account already exists!'}), 400
    
    else:
        query = text("INSERT INTO users (email, firstname, lastname, password) VALUES (:email, :firstname, :lastname, :password)")
        paramaters = {"email": email, "firstname": firstname, "lastname": lastname, "password": password}
        db.session.execute(query, paramaters)
        db.session.commit()
        return jsonify({'message': 'You have successfully registered!'}), 200


@app.route('/login', methods=['POST'])
def login():

        data = request.get_json()  # Assuming data is sent as JSON from your React app
        email = data.get('email')
        password = data.get('password')

        # Check if account exists using your database
        query = text("SELECT email, firstname, lastname, password FROM users WHERE email = :email")
        result = db.session.execute(query, {"email": email})
        user = result.fetchone()

        print(f"Data to be checked: {password}, {email}")
        
        if  not password or not email or not any([password, email]):
            return jsonify({'message': 'Please fill out the form!'}), 400

        if user:
            user_password = user[3]
            password_rs = user_password
            if password.__eq__(password_rs):
                return jsonify({'message': 'Login successful'}), 200
            else:
                return jsonify({'message': 'Incorrect password'}), 400
        else:
            return jsonify({'message': 'Incorrect username'}), 400


if __name__ == "__main__":
    app.run()