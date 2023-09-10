export class Game {

    constructor (
        public id: number,
        public name: string,
        public url: string,
        public firstReleaseDate: Date,
        public topCriticScore: number,
        public tier: string,
    ) {}
}