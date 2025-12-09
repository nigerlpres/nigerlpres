import NewsCard from '@/components/NewsCard';
// import news from '@/data/news';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios, { AxiosError } from 'axios';

export interface News {
  id: number;
  published_at: string;
  title: string;
  details: string;
  event: string;
  location: string;
  images: string[];
  created_at: string;
}

export interface FetchResponse {
  count: number;
  data: News[];
}

const Newspage = () => {
  const [news, setNews] = useState<News[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get<FetchResponse>('https://lpress-backend.onrender.com/api/v1/news')
      .then((res) => {
        setNews(res.data.data);
        setLoading(false);
      })
      .catch((err: AxiosError) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <div className="max-w-[1050px] mx-auto px-4 py-12">
        <h1 className="text-3xl text-green-900 font-semibold mb-3 lg:text-4xl">
          Latest News from L-PRES
        </h1>
        <p className="text-gray-600">
          Stay abreast of the Livestock Productivity and Resilience Enhancement
          Project (L-PRES) through our News and Updates section. Keep informed
          about the project's latest milestones, achievements, and insights,
          offering you a deeper understanding of the L-PRES initiative.
        </p>

        <div className="flex justify-center items-center h-64">
          <div className="w-12 h-12 border-b-2 animate-spin rounded-full border-green-700"></div>
        </div>
      </div>
    );

  if (error) {
    return (
      <div className="max-w-[1140px] mx-auto px-4 pb-28 lg:pb-12 h-64 p-4">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1140px] mx-auto px-4 py-12">
      <h1 className="text-3xl text-green-900 font-semibold mb-3 lg:text-4xl">
        Latest News from L-PRES
      </h1>
      <p className="text-gray-600">
        Stay abreast of the Livestock Productivity and Resilience Enhancement
        Project (L-PRES) through our News and Updates section. Keep informed
        about the project's latest milestones, achievements, and insights,
        offering you a deeper understanding of the L-PRES initiative.
      </p>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mt-10">
        {news.map((news) => (
          <Link to={`/news/${news.id}`} key={news.id}>
            <NewsCard news={news} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Newspage;
