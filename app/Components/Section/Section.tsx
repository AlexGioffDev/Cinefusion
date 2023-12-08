import { Movie, TvSeries } from '@/types'
import React from 'react'
import Image from 'next/image'

type Show = Movie | TvSeries;

const Section = ({titleSection, shows}: {titleSection: string, shows: Show[]}) => {
  return (
    <section className="flex flex-col gap-2 p-4">
        <h1 className="font-bold uppercase text-[24px] text-secondary dark:text-primary">{titleSection}</h1>
        <div className="overflow-x-auto flex gap-4 w-full flex-nowrap px-3">
          {shows.map((show) => {
            const title = 'title' in show ? show.title : show.name;
            return (
              <div
                key={show.id}
                className="flex-none w-[111px] h-[161px] border-secondary dark:border-primary border-2 rounded-md relative overflow-hidden"
              >
                <Image
                  src={`https://image.tmdb.org/t/p/original${show.poster_path}`}
                  alt={title}
                  fill
                  objectFit="cover"
                  className="absolute"
                />
              </div>
            );
          })}
        </div>
      </section>
  )
}

export default Section