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

@app.route('/deleteForm', methods=['POST'])
def deleteForm():
    data = request.get_json()

    delId = data.get('delId')
    print("delıd",delId)
    try:
        sql_query_delete = text("DELETE FROM adoption WHERE formID = :delId")
        db.session.execute(sql_query_delete,{"delId":delId})
        db.session.commit()
        return jsonify({'message': 'Form successfully deleted!'}), 200

    except Exception as e:
        print(str(e))
        return jsonify({'message': 'Error deleting form!'}), 500
    
@app.route('/deleteanimal', methods=['POST'])
def deleteAnimal():
    data = request.get_json()

    pId = data.get('pId')
    try:
        # İlk olarak ilişkili evlat edinme kayıtlarını sil
        adoption_delete_query = text("DELETE FROM adoption WHERE petID = :pId")
        db.session.execute(adoption_delete_query, {"pId": pId})
        db.session.commit()

        # Ardından hayvanı sil
        pet_delete_query = text("DELETE FROM pets WHERE petID = :pId")
        db.session.execute(pet_delete_query, {"pId": pId})
        db.session.commit()

        return jsonify({'message': 'Animal successfully find a new home!'}), 200

    except Exception as e:
        print(str(e))
        return jsonify({'message': 'Error for adopting animal!'}), 500

   
@app.route('/show', methods=['POST'])
def showanimals():
   
    query_select_pets = text("SELECT * FROM pets")
    result_pets = db.session.execute(query_select_pets)
    pets_data = result_pets.fetchall()
    print("here")
    print(pets_data)
   
    if pets_data:
   
        pets_list = []
        for row in pets_data:
            pet_dict = {
                'petID': row[0],
                'petName': row[1],
                'gender': row[2],
                'age': row[3],
                'info': row[4],
                'pet_img': row[5],
                
            }
            pets_list.append(pet_dict)

        return jsonify({
            'pets': pets_list,
        }), 200
    else:
        return jsonify({'message': 'Error retrieving pets information!'}), 500
   

@app.route('/apply', methods=['POST'])
def apply():
    query_select_adoption = text("SELECT * FROM adoption")
    result_adoption = db.session.execute(query_select_adoption)
    adoption_data = result_adoption.fetchall()
    print(adoption_data)

    formIds = []
    first_names = []
    last_names = []
    user_emails = []
    phone_nums = []
    pet_ids = []
    addresses = []
    if adoption_data:
        for row in adoption_data:
            formIds.append(row[0])
            first_names.append(row[1])
            last_names.append(row[2])
            user_emails.append(row[3])
            phone_nums.append(row[4])
            pet_ids.append(row[5])
            addresses.append(row[6])

        return jsonify({
            'formId': formIds,
            'firstName': first_names,
            'lastName': last_names,
            'userEmail': user_emails,
            'phoneNum': phone_nums,
            'petID': pet_ids,
            'address': addresses
        }), 200
    else:
        return jsonify({'message': 'Error retrieving adoption information!'}), 500
@app.route('/application', methods=['POST'])
def application():

    data = request.get_json()
    firstName=data.get('firstName')
    lastName=data.get('lastName')
    userEmail=data.get('email')
    phoneNum=data.get('phonenumber')
    address=data.get('address')
    petID=data.get('animalID')
    print(firstName,lastName,userEmail,phoneNum,address,petID)

    query = text("INSERT INTO adoption (firstName,lastName,userEmail,phoneNum,petID,address) VALUES (:firstName,:lastName,:userEmail,:phoneNum,:petID,:address)")
    paramaters = {"firstName": firstName, "lastName": lastName, "userEmail": userEmail, "phoneNum": phoneNum,"petID": petID, "address": address}
    db.session.execute(query, paramaters)
    db.session.commit()
    return jsonify({'message': 'You have successfully applied!'}), 200
    
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

        data = request.get_json() 
        email = data.get('email')
        password = data.get('password')

        # Check point for  if account exists using in our database
        query = text("SELECT email, firstname, lastname, password FROM users WHERE email = :email")
        result = db.session.execute(query, {"email": email})
        user = result.fetchone()

        print(f"Data to be checked: {password}, {email}")
        
        if  not password or not email or not any([password, email]):
            return jsonify({'message': 'Please fill out the form!'}), 400

        if user:
            user_email = user[0]

            user_password = user[3]
            password_rs = user_password
            if password.__eq__(password_rs):
                if user_email == "admin@admin.com":
                    return jsonify({'message': 'admin'}), 200
                else:
                    return jsonify({'message': 'Login successful'}), 200
            else:
                return jsonify({'message': 'Incorrect password'}), 400
        else:
            return jsonify({'message': 'Incorrect username'}), 400
        


if __name__ == "__main__":
    app.run()