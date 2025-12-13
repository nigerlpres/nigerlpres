import { GiDuration, GiMoneyStack } from 'react-icons/gi';
import { IoLogoWebComponent } from 'react-icons/io5';
import { MdOutlineVpnLock } from 'react-icons/md';
import { Link } from 'react-router-dom';
import farmRoosters from '../assets/farm-roosters.jpg';
import MileStones from './MileStones';

const FrameworkSection = () => {
  const statistics = [
    { name: 'duration', details: '6 Years', icon: <GiDuration />, delay: 100 },
    {
      name: 'eligible states',
      details: '36',
      icon: <MdOutlineVpnLock />,
      delay: 150,
    },
    {
      name: 'project cost',
      details: '$500M',
      icon: <GiMoneyStack />,
      delay: 200,
    },
    {
      name: 'components',
      details: '5',
      icon: <IoLogoWebComponent />,
      delay: 250,
    },
  ];

  return (
    <div className="px-4 py-12.5 text-center">
      <h2 className="tracking-[5px] text-3xl text-gray-600 font-light mb-5">
        FRAMEWORK
      </h2>
      <div className="flex flex-col gap-10 max-w-5xl mx-auto relative md:flex-row">
        <div className="absolute right-0 left-0 top-1/2 w-auto h-1.25 bg-gray-200 hidden md:block"></div>
        {statistics.map((stat) => (
          <div
            key={stat.name}
            className="stat p-5 rounded-3xl bg-gray-100 grow z-10"
            data-aos="fade-up"
            data-aos-delay={stat.delay}
          >
            <span className="w-12.5 h-12.5 mb-5 bg-green-600 justify-self-center text-white text-3xl inline-flex justify-center items-center rounded-full">
              {stat.icon}
            </span>
            <p className="text-4xl font-semibold text-green-700 mb-2">
              {stat.details}
            </p>
            <h3 className="font-semibold text-gray-600">{stat.name}</h3>
          </div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="py-17.5 grid gap-10 text-left md:grid-cols-[300px_1fr]">
          <h2 className="text-4xl text-green-800 font-semibold">
            We are Transforming Livestock Farming In Africa
          </h2>
          <div className="text-gray-600">
            <p className="mb-5">
              Within the framework of the L-PRES initiative, sponsored by FMAFS
              and the World Bank, our vision is to cultivate a Livestock
              Industry in Nigeria marked by value addition and quality services,
              thereby fostering a sustainable, diversified, and productive
              livestock economy. At L-PRES, our mission is dedicated to
              establishing an enabling environment for livestock farmers and
              stakeholders, ensuring the delivery of quality and efficient
              services. This is accomplished through the effective formulation
              and implementation of livestock policies.
            </p>
            <p>
              Aligned with our commitment, L-PRES is guided by core values such
              as professionalism, teamwork, innovation, and the provision of
              quality services. We strive to enhance productivity, instill
              resilience, and promote value addition within the livestock
              sector. These values also encompass the ideals of
              self-sufficiency, wealth creation, and inclusiveness, reflecting
              our comprehensive approach to contributing to the growth and
              prosperity of the Livestock Industry in Nigeria. Through the
              embodiment of these core values, L-PRES aims to play a pivotal
              role in shaping a vibrant and sustainable future for the Livestock
              Industry in Nigeria under the joint sponsorship of FMAFS and the
              World Bank.
            </p>
          </div>
        </div>
        <img
          className="w-full h-62.5 rounded-2xl object-cover"
          src={farmRoosters}
          alt="roosters"
          loading="lazy"
        />
      </div>

      <div className="pt-14 pb-10" data-aos="fade-up" data-aos-duration="400">
        <div className="max-w-162.5 mx-auto p-3 bg-white border border-gray-200 rounded-lg shadow-sm text-left">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-800 capitalize">
            we finish what we start
          </h5>
          <p className="mb-3 font-normal text-gray-600">
            At the heart of the Livestock Productivity and Resilience
            Enhancement Project (L-PRES) are impactful initiatives aimed at
            bringing about positive change in Nigeria's livestock sector. Our
            diverse range of projects reflects our commitment to enhancing
            productivity, resilience, and commercialization across selected
            value chains.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-sm text-white bg-green-700  hover:bg-green-800 focus:outline-none transition-colors"
          >
            View all projects
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
      <MileStones />
    </div>
  );
};

export default FrameworkSection;
