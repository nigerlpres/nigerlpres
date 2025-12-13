import { GiCow, GiDroplets, GiGrass } from 'react-icons/gi';
import { IoWoman } from 'react-icons/io5';

const MileStones = () => {
  const milestones = [
    {
      icon: <GiCow />,
      title: 'Artificial Insemination and Breed Improvement',
      position: 'start',
      details:
        'Niger L-PRES has introduced Brahman and Belgian Blue cattle breedsthrough artificial insemination programs, improving genetic quality and productivity of indigenous livestock.',
    },
    {
      icon: <GiGrass />,
      title: 'Pasture Development',
      position: 'end',
      details:
        'Pasture seeds, fodder shrubs, and crop residue crushers were distributed to farmers to boost feed availability and promote sustainable grazing.',
    },
    {
      icon: <GiDroplets />,
      title: 'Infrastructure Upgrade',
      position: 'start',
      details:
        'Seventeen solar-powered boreholes were installed, a disease surveillance lab was rehabilitated, a cold-chain system for vaccines was established, and four abattoirs were renovated and handed over to local councils.',
    },
    {
      icon: <IoWoman />,
      title: 'Women & Youth Empowerment',
      position: 'end',
      details:
        '30% of project beneficiaries are women and youth, equipped with new skills and livestock management resources.',
    },
  ];

  return (
    <div className="pt-10 pb-3 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold text-green-900 md:text-3xl lg:4xl">
        Our Milestones
      </h2>
      <p className="mb-2 text-gray-600">
        Highlights of some of the progress we've made
      </p>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {milestones.map((milestone) =>
          milestone.position === 'start' ? (
            <li key={milestone.title} data-aos="zoom-in">
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="green"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 text-left shadow-sm border-1 text-gray-600 rounded-3xl p-4 md:text-end">
                <span className="text-3xl text-green-800 inline-block">
                  {milestone.icon}
                </span>
                <div className="text-[20px] font-semibold text-green-900">
                  {milestone.title}
                </div>
                {milestone.details}
              </div>
              <hr />
            </li>
          ) : (
            <li key={milestone.title} data-aos="zoom-in">
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="green"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end text-gray-600 text-left shadow-sm border-1 rounded-3xl p-4 mb-10">
                <span className="text-3xl text-green-800 inline-block">
                  {milestone.icon}
                </span>
                <div className="text-[20px] font-semibold text-green-900">
                  {milestone.title}
                </div>
                {milestone.details}
              </div>
              <hr />
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default MileStones;
