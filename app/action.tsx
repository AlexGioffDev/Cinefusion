"use server"
import { MoviesResponse, Movie, MovieGenre, TvSeries, TvSeriesResponse, TvGenre } from "@/types"


const getMoviesByGenre = async (genre: MovieGenre): Promise<Movie[]> => {
    let movies: Movie[] = [];
    let page = 1;
    let moviesIds = new Set<number>();
    while ( movies.length < 20) {
        const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&primary_release_year=2023&sort_by=popularity.desc&api_key=${process.env.TMDB_API}`
        const response = await fetch(url)

        const data: MoviesResponse = await response.json()

        const filteredMovies = data.results.filter(movie =>{
            if(!moviesIds.has(movie.id)){
                moviesIds.add(movie.id)
                return movie.genre_ids.includes(genre)
            }
            return false
        })
        movies = [...movies, ...filteredMovies]
        page++;
    }

    if(movies.length > 20){
        movies = movies.slice(0, 20);
    }

    return movies;
}

const getTvSeriesByGenre = async(genre: TvGenre, isJapanese: boolean = false): Promise<TvSeries[]> => {
    let tvSeries: TvSeries[] = []
    let page = 1;
    let tvSeriesId = new Set<number>();

    while (tvSeries.length < 20 ){
        const url = `https://api.themoviedb.org/3/discover/tv?first_air_date_year=2023&include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=popularity.desc&api_key=${process.env.TMDB_API}`
        const response = await fetch(url)

        const data: TvSeriesResponse = await response.json();

        const filteredTvSeries = data.results.filter(tvserie => {
            if (!tvSeriesId.has(tvserie.id)) {
                tvSeriesId.add(tvserie.id)
                if(isJapanese){
                    return tvserie.genre_ids.includes(genre) && tvserie.origin_country.includes('JP')
                }
                return tvserie.genre_ids.includes(genre)
            }
            return false
        })
        tvSeries = [...tvSeries, ...filteredTvSeries]
        page++;
    }

    if(tvSeries.length < 20){
        tvSeries = tvSeries.slice(0, 20);
    }


    return tvSeries;
}

export const getPopularMovies = async (): Promise<Movie[]> => {
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2023&sort_by=popularity.desc&api_key=${process.env.TMDB_API}`
    const response = await fetch(url)
    const data: MoviesResponse = await response.json()
    return data.results;
}


export const getTrendingTvSeries = async (): Promise<TvSeries[]> => {
    const url = `https://api.themoviedb.org/3/discover/tv?first_air_date_year=2023&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${process.env.TMDB_API}`
    const response = await fetch(url)
    const data: TvSeriesResponse = await response.json()
    return data.results;
}



export const getHorrorMovies = async (): Promise<Movie[]> => {
    return getMoviesByGenre(MovieGenre.Horror)
}

export const getAnimationMovies = async (): Promise<Movie[]> => {
    return getMoviesByGenre(MovieGenre.Animation)
}

export const getAnimeTvSeries = async (): Promise<TvSeries[]> => {
    return getTvSeriesByGenre(TvGenre.Animation, true)
}

export const getDramaTvSeries = async (): Promise<TvSeries[]> => {
    return getTvSeriesByGenre(TvGenre.Drama)
}