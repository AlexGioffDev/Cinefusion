"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CalendarIcon } from "@heroicons/react/20/solid";
import { MovieGenre } from "@/types";
import { Movie } from "@/types";
import Card from "../Card/Card";
import GenresCard from "../GenresCard/GenresCard";



const Slider = ({ movies }: {movies: Movie[]}) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const next = (current + 1) % movies.length;
    const id = setTimeout(() => setCurrent(next), 5000);
    return () => clearTimeout(id);
  }, [current, movies]);




  return (
    <div className="relative w-full h-[300px] overflow-hidden text-primary">
      {movies.map((movie, i) => (
        <div
          className={`absolute top-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            current === i ? "opacity-100" : "opacity-0"
          }`}
          key={i}
        >
          <Image
            fill
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            className="object-fill bg-cover bg-center z-10"
          />
          <div className="absolute top-0 bg-secondary/70 z-20 w-full h-full" />
          <div className="absolute top-0 w-full h-full z-50 flex py-4 px-2 gap-3 items-center">
            <div className="flex flex-col gap-2">
              <Card title={movie.title} url_poster={movie.poster_path} />
              <button className=" flex items-center justify-center w-full bg-primary text-secondary rounded font-light text-sm">See More</button>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-primary font-bold text-xl uppercase">
                {movie.title.length > 20
                  ? movie.title.substring(0, 18) + "..."
                  : movie.title}
              </h1>
              <div className="flex gap-1 items-center font-light">
                <CalendarIcon className="h-4 w-4 font-light" />
                <h3 className="font-light text-sm">{movie.release_date}</h3>
              </div>
              <div className="flex gap-2 mt-2">
                {movie.genre_ids.map((genre, i) => {
                    const genreName = MovieGenre[genre];
                    if(i > 1) return; 
                   
                    return <GenresCard key={genre} name={genreName} />
                })}
              </div>
              <p className="text-primary whitespace-pre-wrap">
                {movie.overview.length > 100
                  ? movie.overview.substring(0, 100) + "..."
                  : movie.overview}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
