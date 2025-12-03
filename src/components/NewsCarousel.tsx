import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import news from '@/data/news';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import NewsCard from './NewsCard';
import { Link } from 'react-router-dom';

const NewsCarousel = () => {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  return (
    <div className="relative overflow-hidden">
      <Carousel
        orientation="vertical"
        className="w-full max-w-[900px] mx-auto "
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="-ml-1 h-[450px]">
          {news.map((news) => (
            <CarouselItem
              key={news.id}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <Link to={`/news/${news.id}`}>
                <div className="p-1">
                  <NewsCard news={news} />
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default NewsCarousel;
