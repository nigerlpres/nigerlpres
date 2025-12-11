import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useRef, useState } from 'react';
import ProjectCard from './ProjectCard';
import type { FetchProjectsResponse, Project } from '@/pages/Projectspage';
import axios, { AxiosError, CanceledError } from 'axios';
import { Skeleton } from './ui/skeleton';

interface Props {
  orientation?: 'horizontal' | 'vertical';
}

const ProjectsCarousel = ({ orientation = 'horizontal' }: Props) => {
  const skeleton = [1, 2, 3, 4, 5];
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
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

  if (error) return null;

  return (
    <div className="relative overflow-hidden">
      <Carousel
        orientation={orientation}
        className="w-full max-w-[900px] mx-auto"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent
          className={`-ml-1 ${
            orientation === 'vertical' ? 'h-[420px]' : 'h-auto'
          }`}
        >
          {!isLoading &&
            projects.map((project) => (
              <CarouselItem
                key={project.id}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <ProjectCard project={project} />
                </div>
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

export default ProjectsCarousel;
