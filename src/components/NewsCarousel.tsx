import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import axios, { AxiosError, CanceledError } from 'axios';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import NewsCard from './NewsCard';
import { Skeleton } from './ui/skeleton';
import type { FetchResponse, News } from '@/pages/Newspage';

const NewsCarousel = () => {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
  const skeleton = [1, 2, 3, 4, 5];
  const [news, setNews] = useState<News[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const controller = new AbortController();
    axios
      .get<FetchResponse>(
        'https://lpress-backend-y1jn.onrender.com/api/v1/news',
        {
          signal: controller.signal,
        }
      )
      .then((res) => {
        setNews(res.data.data);
        setLoading(false);
      })
      .catch((err: AxiosError) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  if (error || !news) return null;

  return (
    <div className="relative overflow-hidden">
      <Carousel
        orientation="vertical"
        className="w-full max-w-225 mx-auto "
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="-ml-1 h-[450px]">
          {!isLoading &&
            news.map((news) => (
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
          {isLoading &&
            skeleton.map((id) => (
              <div key={id} className="flex flex-col space-y-3 mb-12">
                <Skeleton className="h-[180px] rounded-xl" />
                <div className="space-y-2 h-12">
                  <Skeleton className="h-4 w-9/12" />
                  <Skeleton className="h-4 w-9/12" />
                </div>
              </div>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default NewsCarousel;
