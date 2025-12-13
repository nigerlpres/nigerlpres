import ProjectLocation from '@/components/ProjectLocation';
import ProjectsCarousel from '@/components/ProjectsCarousel';
import ProjectStatusBadge from '@/components/ProjectStatusBadge';
import axios, { AxiosError, CanceledError } from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { Project } from './Projectspage';

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState<Project>();
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);
  const fullLocation = `${project?.ward}, ${project?.lga}, ${project?.location}`;

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    axios
      .get<{ data: Project }>(
        `https://lpress-backend-y1jn.onrender.com/api/v1/projects/${id}`,
        { signal: controller.signal }
      )
      .then((res) => {
        setProject(res.data.data);
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
      <div className="max-w-285 mx-auto px-4 pb-28 lg:pb-12">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700"></div>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="max-w-285 mx-auto px-4 pb-28 lg:pb-12">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
          {error || 'Project not found'}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-5">
        <div className="flex mb-4 flex-col lg:flex-row lg:justify-between">
          <div className="max-w-lg">
            <h1 className="text-2xl font-semibold text-green-900 lg:text-2xl mb-1 uppercase">
              {project.title}
            </h1>
            <p className="text-gray-600">Project overview and progress</p>
          </div>
          <div className="mb-3 mt-3 lg:mt-0">
            <ProjectStatusBadge status={project.status} />
          </div>
        </div>
        <div className="flex mb-5 justify-between max-w-xl">
          <div>
            <p className="text-gray-600 font-semibold text-lg">Location</p>
            <ProjectLocation location={fullLocation} />
          </div>
          <div>
            <p className="text-gray-600 font-semibold text-lg">Status</p>
            <p className="capitalize">{project.status}</p>
          </div>
        </div>
        <div>
          <p className="font-semibold text-lg text-gray-600">Description</p>
          <div
            className="prose prose-zinc dark:prose-invert max-w-3xl leading-relaxed"
            dangerouslySetInnerHTML={{ __html: project.description }}
          />
        </div>
      </div>
      <div className="">
        <p className="text-gray-600 font-semibold mb-3 text-lg">
          Project Images
        </p>
        <div className="grid gap-3 md:grid-cols-[1fr_300px]">
          <div className="grid gap-4 max-w-2xl">
            <div className="grid gap-4 grid-cols-2">
              {project.images.slice(0, 2).map((image, index) => (
                <div key={index}>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={image}
                    alt={project.title}
                  />
                </div>
              ))}
            </div>
            <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
              {project.images.slice(2).map((image, index) => (
                <div key={index}>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={image}
                    alt={project.title}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 max-w-sm mx-auto">
            <h2 className="text-green-900 font-semibold text-[27px] text-3xl mb-3">
              Explore Other Projects
            </h2>
            <ProjectsCarousel orientation="vertical" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
