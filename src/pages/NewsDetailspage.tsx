import NewsCarousel from '@/components/NewsCarousel';
import axios, { AxiosError, CanceledError } from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { News } from './Newspage';

const NewsDetailsPage = () => {
  const { id } = useParams();
  const [news, setNews] = useState<News | null>();
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    axios
      .get<{ data: News }>(
        `https://lpress-backend-y1jn.onrender.com/api/v1/news/${id}`,
        { signal: controller.signal }
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
  }, [id]);

  if (isLoading) {
    return (
      <div className="max-w-[1140px] mx-auto px-4 pb-28 lg:pb-12">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700"></div>
        </div>
      </div>
    );
  }

  if (error || !news) {
    return (
      <div className="max-w-[1140px] mx-auto px-4 pb-28 lg:pb-12">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
          {error || 'News not found'}
        </div>
      </div>
    );
  }
  const date = new Date(news.published_at || news.created_at);
  return (
    <div>
      <div className="max-w-[1140px] mx-auto px-4 py-12">
        <div className="mb-5">
          <h1 className="text-xl font-semibold mb-1 text-green-900 lg:text-2xl">
            {news.title}
          </h1>
          <div className="text-gray-500 tracking-wider mb-3 flex flex-col lg:flex-row lg:justify-between">
            <p>News details and event highlights</p>
            <p className="mb-2 mt-2 lg:mt-0 italic">
              {date.toLocaleDateString('en-us', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
          <div className="mb-5">
            <p className="font-semibold text-gray-600 text-lg">Event</p>
            {news.event}
          </div>
          <div>
            <p className="font-semibold text-lg text-gray-600">Description</p>
            <div
              className="prose prose-zinc dark:prose-invert max-w-3xl leading-relaxed"
              dangerouslySetInnerHTML={{ __html: news.details }}
            />
          </div>
        </div>
        <div>
          <p className="text-lg text-gray-600 font-semibold mb-2">Images</p>
          <div className="grid md:grid-cols-[1fr_300px] gap-5">
            <div className="grid gap-4 max-w-3xl">
              <div className="grid gap-2 lg:grid-cols-3">
                {news.images.map((image, index) => (
                  <div key={index}>
                    <img
                      className="h-48 w-full object-cover rounded-lg"
                      src={image}
                      alt={news.title}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="">
              <h2 className="text-green-900 font-semibold text-[27px] text-3xl mb-5">
                Explore other News
              </h2>
              <NewsCarousel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
