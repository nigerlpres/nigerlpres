import LPRESNigerMap from '@/components/LPRESNigerMap';

const Contactpage = () => {
  const contactInfo = [
    {
      title: 'coordination office',
      details: 'PLOT 23 YUSUF DATTI ROAD F-LAYOUT',
    },
    { title: 'tel:', details: '08036461758, 07013495696' },
    { title: 'email', details: 'niger@lpresnigeria.gov.ng' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 text-gray-600">
      <div>
        <h1 className="text-3xl text-green-900 mb-3 font-semibold lg:text-4xl">
          Get in touch with us
        </h1>
        <p>
          We value your interest and engagement with the Livestock Productivity
          and Resilience Enhancement Project (L-PRES). If you have any
          inquiries, suggestions, or would like to explore collaboration
          opportunities, our team is here to assist you.
        </p>
        <div className="grid mt-5 gap-5 lg:grid-cols-[2fr_1fr]">
          <LPRESNigerMap />
          <div className="self-center">
            {contactInfo.map((info) => (
              <div key={info.title} className="mb-10">
                <h2 className="text-gray-700 text-2xl md:text-3xl font-semibold capitalize">
                  {info.title}
                </h2>
                <p>{info.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactpage;
