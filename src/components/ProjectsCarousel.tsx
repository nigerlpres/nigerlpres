import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import projects from '@/data/projects';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import ProjectCard from './ProjectCard';

interface Props {
  orientation?: 'horizontal' | 'vertical';
}

const ProjectsCarousel = ({ orientation = 'horizontal' }: Props) => {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

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
          {projects.map((project) => (
            <CarouselItem
              key={project.id}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <ProjectCard project={project} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ProjectsCarousel;
