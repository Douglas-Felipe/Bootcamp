from flask_restful import Resource
from flask import request

from models.hero import Hero

class HeroesSearchHandler(Resource):
    """Heroes Serach Handler"""

    def get(self):
        """Get heroes"""
        try:
            heroes = Hero.search_heroes(request.args.get('name'))
            response = {
                'heroes': [],
            }
            # Vamos percorer os herois e transformar em json
            for hero in heroes:
                response['heroes'].append(hero.to_dict())
            #Verificando se tivemos herois no retorno
            if response['heroes']:
                if response['heroes'][0]['name']:
                    return {'message': 'Bad request, param name is required'}, 400
                return response['heroes']
            return {'message': 'Hero not found'}, 404

        except Exception as error:
            return {
                       'message': 'Error on get heroes',
                       'details': str(error)
                   }, 500