export type Formula = [boolean, boolean, boolean, boolean];

export type Tile = {
    roads?: number;
    cities?: number;
    shield?: boolean;
    temple?: boolean;
}

export type TileDirection = 0|1|2|3;

/*
   0
3     1
   2
*/

export enum Job {
    Burglar,
    Peasant,
    Bishop,
};

export type MeeplePlacement = {
    team: string;
    job: Job;
    side: TileDirection;
}

export type TilePlacement = {
    tile: Tile;
    x: number;
    y: number;
    order: TileDirection;
    meeple?: string;
}

export type TeamState = {
    name: string;
    freeMeeples: number;
    points: number;
}

export type Game = {
    teams: TeamState[];
    tiles: Tile[];
    placements: TilePlacement[];
    move: string;
}

const tileSetup: {tile: Tile, count: number}[] = [
    { tile: { image: 'city4', cities: 0x11111; shield: true; }, count: 1 },
    { tile: { image: 'road4', roads: 0x1111; }, count: 1 },
    { tile: { image: 'city3', cities: 0x10111; }, count: 3 },
    { tile: { image: 'city3s', cities: 0x10111; shield: true }, count: 1 },
    { tile: { image: 'city3r', cities: 0x10111; roads: 0x1000 }, count: 1 },
    { tile: { image: 'city3sr', cities: 0x10111; roads: 0x1000, shield: true }, count: 2 },

    { tile: { image: 'road3', roads: 0x1110 }, count: 4 },
    { tile: { image: 'city2we', cities: 0x11010 }, count: 1 },
    { tile: { image: 'city2wes', cities: 0x11010, shield: true }, count: 2 },
    { tile: { image: 'road2ns', roads: 0x0101 }, count: 8 },
    { tile: { image: 'city2nw', cities: 0x11100 }, count: 3 },
    { tile: { image: 'city2nws', cities: 0x11100, shield:true }, count: 2 },

    { tile: { image: 'city2nwr', roads: 0x1100, cities: 0x10011 }, count: 3 },
    { tile: { image: 'city2nwsr', roads: 0x1100, cities: 0x10011, shield: true }, count: 2 },
    { tile: { image: 'road2sw', roads: 0x0011 }, count: 9 },
    { tile: { image: 'city11ne', cities: 0x01100 }, count: 2 },
    { tile: { image: 'city11we', cities: 0x01010 }, count: 3 },
    { tile: { image: 'cloisterr', temple: true, roads: 0x1000}, count: 2 },

    { tile: { image: 'cloister', temple: true }, count: 4 },
    { tile: { image: 'city1', cities: 0x10001 }, count: 5 },
    { tile: { image: 'city1rse', cities: 0x10001, roads: 0x1100 }, count: 3 },
    { tile: { image: 'city1rsw', cities: 0x10001, roads: 0x0110 }, count: 3 },
    { tile: { image: 'city1rswe', cities: 0x10001, roads: 0x1110 }, count: 3 },
    { tile: { image: 'city1rwe', cities: 0x10001, roads: 0x1010 }, count: 3 },
]

const arrayOfX = (item: T, times: number): T[] => {
    const result = new Array(times);
    for (const i = 0; i < times; ++i) {
        result[i] = item;
    }
    return result;
}

export const startGame = (teamNames: string[]): Game => {
    return {
        teams: teamNames.map(x => ({
            name: x,
            freeMeeples: 7,
            points: 0,
        }),

        tiles: tileSetup.flatMap(x => arrayOfX(x.tile, x.count)),
        placements: [],
        move: teamNames[0],
    }
}