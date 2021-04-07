export enum HeroUniverse {
    DC = 'dc',
    MARVEL = 'marvel',
    ANIME = 'anime'
}

export interface Hero{
    id: number;
    name: string;
    imageUrl: string;
    universe: HeroUniverse;
    description: string;
}