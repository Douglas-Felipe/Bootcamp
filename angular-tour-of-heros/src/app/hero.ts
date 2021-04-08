export enum HeroUniverse {
    DC = 'dc',
    MARVEL = 'marvel'
}

export interface Hero{
    id: string;
    name: string;
    imageUrl: string;
    universe: HeroUniverse;
    description: string;
}

export interface HeroGetResponse {
    heroes: Array<Hero>;
    cursor: string;
}