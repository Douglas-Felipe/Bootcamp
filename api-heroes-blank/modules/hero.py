from models.hero import Hero
import re

class HeroModule(object):
    """Hero module"""

    @staticmethod
    def create(params):
        """
        Create a new hero
        :param dict params: Request dict params
        :return Hero: Hero created
        """
        hero = Hero()
        hero.name = params['name']
        hero.description = params['description']
        hero.imageUrl = params['imageUrl']
        hero.universe = params['universe']
        HeroModule.format_hero_params(hero)
        HeroModule.valid_hero_params(hero)
        hero.save()
        return hero

    @staticmethod
    def update(hero, params):
        """Update hero"""
        hero.name = params['name']
        hero.description = params['description']
        hero.imageUrl = params['imageUrl']
        hero.universe = params['universe']
        hero.save()

    @staticmethod
    def valid_hero_params(hero):
        r = re.compile(r'^https?://.')
        """Valid hero params"""
        if not hero.name:
            raise Exception('Bad request, name is required')
        if not hero.universe == 'marvel' and not hero.universe == 'dc':
            raise Exception("Bad request, invalid universe")
        if not r.match(hero.imageUrl):
            raise Exception("Bad request, invalid image url")
        if not hero.description:
            raise Exception('Bad request, description is required')

    @staticmethod
    def format_hero_params(hero):
        """Format hero params"""
        hero.name = hero.name.title().strip()
        hero.description = hero.description.title().strip()
