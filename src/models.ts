export interface IMovie {
    id: number
    original_title: string
    overview: string
    backdrop_path: string;
    vote_average:number;
    origin_country:string[];
    poster_path:string;
    genres: {
        id: number;
        name: string;
    }
}



