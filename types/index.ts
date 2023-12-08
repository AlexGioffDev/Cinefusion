export enum MovieGenre {
    Action = 28,
    Adventure = 12,
    Animation = 16,
    Comedy = 35,
    Crime = 80,
    Documentary = 99,
    Drama = 18,
    Family = 10751,
    Fantasy = 14,
    History = 36,
    Horror = 27,
    Music = 10402,
    Mystery = 9648,
    Romance = 10749,
    "Science Fiction" = 878,
    TVMovie = 10770,
    Thriller = 53,
    War = 10752,
    Western = 37
}

export interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface MoviesResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

export enum TvGenre {
    "Action & Adventure" = 10759,
    "Animation" = 16,
    "Comedy" = 35,
    "Crime" = 80,
    "Documentary" = 99,
    "Drama" = 18,
    "Family" = 10751,
    "Kids" = 10762,
    "Mystery" = 9648,
    "News" = 10763,
    "Reality" = 10764,
    "Sci-Fi & Fantasy" = 10765,
    "Soap" = 10766,
    "Talk" = 10767,
    "War & Politics" = 10768,
    "Western" = 37
}

export interface TvSeries {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    first_air_date: string;
    name: string;
    origin_country: string[];
    vote_average: number;
    vote_count: number;
}

export interface TvSeriesResponse {
    page: number;
    results: TvSeries[];
    total_pages: number;
    total_results: number;
}
