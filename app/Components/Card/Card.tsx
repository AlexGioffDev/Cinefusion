import React from "react";
import Image from "next/image";

const Card = ({title, url_poster}: {title: string, url_poster:string}) => (
  <div className="w-[111px] md:w-[222px] h-[161px] md:h-[322px] rounded-md border border-primary overflow-hidden">
    <Image
      src={`https://image.tmdb.org/t/p/original${url_poster}`}
      alt={title}
      layout="responsive"
      width={111}
      height={161}
      className="object-cover"
    />
  </div>
);

export default Card;
