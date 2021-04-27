"""Arquivio main da API"""
from flask import Flask, request
from flask_restful import Resource, Api
from flask_cors import CORS
import firebase_admin
from firebase_admin import firestore

from views.heroes import HeroesHandler, HeroHandler

app = Flask(__name__)
CORS(app)
API = Api(app)

cred = firebase_admin.credentials.Certificate(
    './tour-of-heroes-1ccd6-firebase-adminsdk-33ndd-98729ecfcb.json')

firebase_admin.initialize_app(credential=cred)

@app.before_request
def start_request():
    """Start api request"""
    if request.method == 'OPTIONS':
        return '', 200
    if not request.endpoint:
        return 'Sorry, Nothing at this URL.', 404

# Nossa classe principal
class Index(Resource):
    """class return API index"""

    def get(self):
        """return API"""
        return {"API": "Heroes"}

# Nossa primeira url
API.add_resource(Index, '/', endpoint='index')
API.add_resource(HeroesHandler, '/heroes', endpoint='heroes')
API.add_resource(HeroHandler, '/hero/<hero_id>', endpoint='hero')

if __name__ == '__main__':
    # Isso é utilizado somente para executar a aplicação local. Quando
    # realizarmos o deploy para o Google App Engine, o webserver deles ira
    # inicializar a aplicação de outra forma
    app.run(host='127.0.0.1', port=8080, debug=True)
# [END gae_python37_app]