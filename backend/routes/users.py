from flask import Blueprint, request, jsonify,make_response
from flask_restx import Namespace, Resource,fields
from werkzeug.security import generate_password_hash,check_password_hash
from extensions import db      
from models import User
from flask_jwt_extended import JWTManager,create_access_token,create_refresh_token,jwt_required,get_jwt_identity

api = Namespace('users', description='User operations')

signup_model=api.model(
    "SignUp",
    {
        "username":fields.String(),
        "email":fields.String(),
        "password":fields.String()

    }
)
login_model=api.model(
    'Login',
    {
        'username':fields.String(),
        'password':fields.String()
    }
)

@api.route('/signup', methods=['POST'])
class Signup(Resource):
    @api.expect(signup_model)
    def post(self):
        data=request.get_json()
        username = data.get('username')
        db_user =User.query.filter(User.username==username).first()
        if db_user is not None:
            return make_response(jsonify(data), 400) 

        new_user=User(
            username=data.get('username'),
            email=data.get('email'),
            password=generate_password_hash(data.get('password'))
        )
        new_user.save()
        return make_response(jsonify(data), 201)



@api.route('/login', methods=['POST'])
class Login(Resource):
    @api.expect(login_model)
    def post(self):
        data = request.get_json()

        username = data.get('username')
        password= data.get('password')

        db_user = User.query.filter_by(username=username).first()
        if db_user and check_password_hash(db_user.password,password):
            access_token = create_access_token(identity=db_user.username)
            refresh_token=create_refresh_token(identity=db_user.username)
            return jsonify({
            "access_token":access_token,"refresh_token":refresh_token,"username": db_user.username
            })
        
    
