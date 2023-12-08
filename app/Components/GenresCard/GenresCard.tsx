import React from 'react'

const GenresCard = ({name}: {name: string}) => (
    <div className="flex justify-center items-center py-[0.5rem]  px-1 rounded-lg bg-secondary/60 text-primary border-primary border text-xs capitalize font-light" >{name}</div>
)
export default GenresCard