import ProjectLocation from '@/components/ProjectLocation';
import ProjectsCarousel from '@/components/ProjectsCarousel';
import ProjectStatusBadge from '@/components/ProjectStatusBadge';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const ProjectDetailsPage = () => {
  const text = `
This is the first paragraph of the article. It has some general information and sets the stage for the rest of the content. We can break it into multiple paragraphs for better readability.

Here are some key points:
*   Item A: The first important point.
*   Item B: The second important point, which can be a bit longer to show text wrapping.
*   Item C: The final point.

> This is a blockquote, often used for emphasis or citations. It helps break up the flow of regular paragraphs.

The article concludes here. We encourage readers to stay tuned for more updates.
  `;
  return (
    <div className="max-w-[1024px] mx-auto px-4 py-12">
      <div className="mb-5">
        <div className="flex mb-4 flex-col lg:flex-row lg:justify-between">
          <div className="max-w-lg">
            <h1 className="text-2xl font-semibold text-green-900 lg:text-2xl mb-1">
              Kogi State Kicks Off the Implementation of Private Veterinary
              Practice Programme (PVP)
            </h1>
            <p className="text-gray-600">Project overview and progress</p>
          </div>
          <div className="mb-3 mt-3 lg:mt-0">
            <ProjectStatusBadge status="completed" />
          </div>
        </div>
        <div className="flex mb-5 justify-between max-w-xl">
          <div>
            <p className="text-gray-600 font-semibold text-lg">Location</p>
            <ProjectLocation location="minna, niger state" />
          </div>
          <div>
            <p className="text-gray-600 font-semibold text-lg">Status</p>
            <p>Completed</p>
          </div>
        </div>
        <div>
          <p className="font-semibold text-lg text-gray-600">Description</p>
          <div className="prose prose-zinc dark:prose-invert max-w-3xl leading-relaxed">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
          </div>
        </div>
      </div>
      <div className="">
        <p className="text-gray-600 font-semibold mb-3 text-lg">
          Project Images
        </p>
        <div className="grid gap-3 md:grid-cols-[1fr_300px]">
          <div className="grid gap-4 max-w-2xl">
            <div className="grid gap-4 grid-cols-2">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mt-8 max-w-sm mx-auto">
            <h2 className="text-green-900 font-semibold text-[27px] text-3xl mb-3">
              Explore other projects
            </h2>
            <ProjectsCarousel orientation="vertical" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
