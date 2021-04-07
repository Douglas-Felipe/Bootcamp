export enum HeroUniverse {
    DC = 'dc',
    MARVEL = 'marvel'
}

export interface Hero{
    id: number;
    name: string;
    imageUrl: string;
    universe: HeroUniverse;
    description: string;
}

export interface HeroGetResponse {
    cursor: string;
    heroes: Array<Hero>;
}