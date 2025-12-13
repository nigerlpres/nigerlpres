import ProjectCard from '@/components/ProjectCard';
import axios, { AxiosError, CanceledError } from 'axios';
import { useEffect, useState } from 'react';

export interface Project {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  description: string;
  location: string;
  lga: string;
  ward: string;
  status: 'in progress' | 'completed';
  images: string[];
}

export interface FetchProjectsResponse {
  count: number;
  data: Project[];
}

const Projectspage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const controller = new AbortController();

    axios
      .get<FetchProjectsResponse>(
        'https://lpress-backend-y1jn.onrender.com/api/v1/projects',
        { signal: controller.signal }
      )
      .then((res) => {
        setProjects(res.data.data);
        setLoading(false);
      })
      .catch((err: AxiosError) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  if (isLoading)
    return (
      <div className="max-w-285 mx-auto px-4 py-12">
        <div>
          <h1 className="text-3xl md:text-4xl mb-2 font-semibold text-green-900">
            we finish what we start
          </h1>
          <p className="text-gray-600 mb-6">
            At the heart of the Livestock Productivity and Resilience
            Enhancement Project (L-PRES) are impactful initiatives aimed at
            bringing about positive change in Nigeria's livestock sector. Our
            diverse range of projects reflects our commitment to enhancing
            productivity, resilience, and commercialization across selected
            value chains.
          </p>
        </div>

        <div className="flex justify-center items-center h-64">
          <div className="w-12 h-12 border-b-2 animate-spin rounded-full border-green-700"></div>
        </div>
      </div>
    );

  if (error) {
    return (
      <div className="max-w-285 mx-auto px-4 pb-28 lg:pb-12 h-64 p-4">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
          {error}
        </div>
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="max-w-285 mx-auto px-4 py-12">
        <div>
          <h1 className="text-3xl md:text-4xl mb-2 font-semibold text-green-900">
            we finish what we start
          </h1>
          <p className="text-gray-600 mb-6">
            At the heart of the Livestock Productivity and Resilience
            Enhancement Project (L-PRES) are impactful initiatives aimed at
            bringing about positive change in Nigeria's livestock sector. Our
            diverse range of projects reflects our commitment to enhancing
            productivity, resilience, and commercialization across selected
            value chains.
          </p>
        </div>
        <div className="h-64 rounded-2xl border-dashed border-2 text-2xl text-gray-600 flex justify-center items-center border-gray-300">
          <p className="tracking-wider font-extralight">
            Published projects appear here...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-285 mx-auto px-4 py-12">
      <div>
        <h1 className="text-3xl md:text-4xl mb-2 font-semibold text-green-900">
          we finish what we start
        </h1>
        <p className="text-gray-600 mb-6">
          At the heart of the Livestock Productivity and Resilience Enhancement
          Project (L-PRES) are impactful initiatives aimed at bringing about
          positive change in Nigeria's livestock sector. Our diverse range of
          projects reflects our commitment to enhancing productivity,
          resilience, and commercialization across selected value chains.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projectspage;
