import lpresLogo from '../assets/lpres-about-logo.jpeg';
import bgCock from '../assets/bg-cock.jpg';
import bgSheep from '../assets/bg-sheeps.jpg';
import bgHen from '../assets/bg-hen.jpg';

const Aboutpage = () => {
  const companyPrinciples = [
    {
      title: 'Vision',
      image: bgCock,
      details:
        'A Livestock Industry where value addition and quality services enable sustainable, diversified and productive livestock economy in Nigeria.',
    },
    {
      title: 'Mission',
      image: bgSheep,
      details:
        'To provide enabling environment for quality and efficient service delivery to livestock farmers and stakeholders through effective livestock policy formulation and implementation',
    },
    {
      title: 'Core Values',
      image: bgHen,
      details:
        'Professionalism, Teamwork, Innovation, Quality Service, Productivity, Resilience, Value Addition, Self Sufficiency, Wealth Creation, Inclusiveness.',
    },
  ];

  const projectsComponents = [
    {
      title: 'Component 1: Institutional and Innovation System Strengthening',
      details: [
        'Policy formulation and planning',
        'Capacity building for livestock officers',
        'Strengthening animal health and husbandry services',
      ],
    },
    {
      title: 'Component 2: Livestock Value Chain Enhancement',
      details: [
        'Market development and linkages',
        'Access to finance and investment support',
        'Livestock Service Centers rehabilitation',
      ],
    },
    {
      title: 'Component 3: Crisis Prevention and Conflict Mitigation',
      details: [
        'Natural resource management',
        'Pasture improvement and grazing reserves',
      ],
    },
    {
      title: 'Component 4: Project Coordination and Management',
      details: [
        'Monitoring & evaluation',
        'Transparency and sustainability measures',
      ],
    },
    {
      title: 'Component 5: Contingency Emergency Response',
      details: [
        'Rapid response to disease outbreaks or climate-related shocks',
      ],
    },
  ];

  return (
    <div>
      <div className="max-w-285 mx-auto px-4 py-12 grid items-center gap-10 lg:grid-cols-2">
        <div className="rounded-lg overflow-hidden">
          <img src={lpresLogo} className="shadow-2xl w-full object-cover" />
        </div>
        <div>
          <h1 className="text-3xl font-semibold text-green-900 lg:text-5xl">
            About L-PRES
          </h1>
          <div className="text-gray-600">
            <p className="py-6">
              The Livestock Productivity and Resilience Support Project (L-PRES)
              is a six-year (2023-2028) World Bank-assisted initiative
              implemented in 20 Nigerian states. Niger State focuses on three
              key value chains: poultry, sheep & goats, and beef cattle.
            </p>
            <p className="pb-6">
              The goal of the project is to improve livestock productivity,
              strengthen resilience, and enhance commercialization through
              sustainable interventions that uplift farmers and communities.
            </p>
            <p>
              Our key objectives are to improve animal health and breeding
              services, strengthen market linkages and access to finance
              Developing pastures and grazing reserves
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 rounded-[30px] rounded-br-[110px]">
        <div className="max-w-285 mx-auto px-4 grid py-24 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
          {companyPrinciples.map((principle) => (
            <div
              key={principle.title}
              className="group card bg-base-100 image-full w-full shadow-sm cursor-pointer"
              data-aos="zoom-in"
            >
              <figure>
                <img
                  className="group-hover:transform-[scale(1.3)] transition-transform duration-1000"
                  src={principle.image}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-3xl">{principle.title}</h2>
                <p className="tracking-wide md:text-[16px]">
                  {principle.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-225 mx-auto py-14 px-4">
        <h2 className="text-3xl font-semibold text-green-900">
          Projects Components
        </h2>
        <p className="text-gray-600 my-4">
          The Livestock Productivity and Resilience Project (L-PRES) is a
          strategic input to the country's long-term approach of developing and
          transforming its livestock subsector.
        </p>
        <div className="join join-vertical bg-base-100 w-full">
          {projectsComponents.map((component, index) => (
            <div
              key={index}
              className="collapse collapse-arrow join-item border-base-300 border"
            >
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title font-semibold text-green-900 lg:text-[22px]">
                {component.title}
              </div>
              <div className="collapse-content text-sm lg:text-[16px] text-gray-600">
                <ul className="list-disc pl-5">
                  {component.details.map((detail, detailIndex) => (
                    <li className="my-1" key={detailIndex}>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
