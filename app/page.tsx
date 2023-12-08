import Image from "next/image";
import { getAnimationMovies, getAnimeTvSeries, getDramaTvSeries, getHorrorMovies, getPopularMovies, getTrendingTvSeries } from "./action";
import Slider from "./Components/Slider/Slider";
import Section from "./Components/Section/Section";
export default async function Home() {
  const popularMovies = await getPopularMovies();
  const horrorMovies = await getHorrorMovies();
  const animationMovies = await getAnimationMovies();

  const trendingTvSeries = await getTrendingTvSeries();
  const animeTvSeries = await getAnimeTvSeries();
  const dramaTVSeries = await getDramaTvSeries();
  return (
    <div className="h-full relative">
      <Slider movies={popularMovies} />
      <Section titleSection="Horror Movies" shows={horrorMovies} />
      <Section titleSection="Animation Movies" shows={animationMovies} />
       <Section titleSection="Trending Tv Series" shows={trendingTvSeries} />
      <Section titleSection="Anime" shows={animeTvSeries} />
      <Section titleSection="Drama" shows={dramaTVSeries} />
      <div className="h-[50px]"/>
    </div>
  );
}
