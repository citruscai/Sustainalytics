from flask import Flask, send_from_directory
from flask_cors import CORS
from flask_restx import Api
from flask_jwt_extended import JWTManager
from dotenv import load_dotenv
import os

from extensions import db, migrate  # Assuming you've moved db and migrate to extensions.py

load_dotenv()

def create_app():
    app = Flask(__name__, static_folder='build', static_url_path='')
    CORS(app)

    api = Api(app, version='1.0', title='My API', description='A Simple API', doc='/docs')

    database_url = os.getenv('DATABASE_URL', 'sqlite:///yourdefault.db')
    if database_url.startswith("postgres://"):
        database_url = database_url.replace("postgres://", "postgresql://", 1)
    app.config['SQLALCHEMY_DATABASE_URI'] = database_url
    
    app.config['JWT_SECRET_KEY'] = os.getenv('SECRET_KEY')

    db.init_app(app)
    migrate.init_app(app, db)
    JWTManager(app)

    from routes.users import api as users_api
    api.add_namespace(users_api, path='/api/users')

    
    @app.route('/', defaults={'path': ''})
    @app.route('/<path:path>')
    def serve(path):
        if path != "" and os.path.exists(app.static_folder + '/' + path):
            return send_from_directory(app.static_folder, path)
        else:
            return send_from_directory(app.static_folder, 'index.html')

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(host='localhost')
