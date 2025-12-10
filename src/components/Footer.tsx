import axios from 'axios';
import { useRef, useState } from 'react';
import {
  FaFacebookSquare,
  FaInstagram,
  FaPhone,
  FaYoutube,
} from 'react-icons/fa';
import { FaLocationDot, FaSquareXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const Footer = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const [subscribing, setSubscribing] = useState(false);
  const date = new Date();
  const contactInfo = [
    {
      icon: <FaLocationDot />,
      type: 'text',
      value:
        'L-PRES Niger State Coordination Office PLOT 23 YUSUF DATTI ROAD F-LAYOUT',
    },
    {
      icon: <FaLocationDot />,
      type: 'text',
      value: 'Minna, Niger State, Nigeria',
    },
    {
      icon: <FaPhone />,
      type: 'link',
      label: 'GRM Hotline',
      value: 'tel:+2347078014165',
    },
    {
      icon: <MdEmail />,
      type: 'link',
      label: 'Mail Us',
      value: 'mailto:nigerlpres.grm@gmail.com',
    },
  ];

  const quickLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'News', path: '/news' },
    { label: 'Projects', path: '/projects' },
  ];

  const socialsIcons = [
    { icon: <FaInstagram />, link: '#' },
    { icon: <FaSquareXTwitter />, link: '#' },
    { icon: <FaFacebookSquare />, link: '#' },
    { icon: <FaYoutube />, link: '#' },
  ];

  return (
    <footer className="bg-green-50 rounded-2xl backdrop-blur-md overflow-hidden">
      <div className="max-w-[1140px] mx-auto">
        <div className="footer sm:footer-horizontal text-base-content text-sm p-4">
          <nav>
            <h6 className="footer-title">Contact Info</h6>
            {contactInfo.map((info) =>
              info.type === 'text' ? (
                <div key={info.value} className="flex items-center my-1">
                  <span className="text-lg text-green-800 mr-2">
                    {info.icon}
                  </span>
                  <p>{info.value}</p>
                </div>
              ) : (
                <a
                  href={info.value}
                  key={info.value}
                  className="link link-hover flex my-1"
                >
                  <span className="text-lg text-green-800 mr-2">
                    {info.icon}
                  </span>
                  {info.label}
                </a>
              )
            )}
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            {quickLinks.map((link) => (
              <Link key={link.label} className="link link-hover" to={link.path}>
                {link.label}
              </Link>
            ))}
          </nav>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubscribing(true);
              if (emailRef.current) {
                axios
                  .post(
                    'https://lpress-backend.onrender.com/api/v1/subscribers/subscribe',
                    { email: emailRef.current.value }
                  )
                  .then(() => {
                    setSubscribing(false);
                    toast('Thanks for subscribing!');
                  })
                  .catch(() => {
                    setSubscribing(false);
                    toast("Oops! We couldn't subscribe you. Please try again.");
                  });

                emailRef.current.value = '';
              }
            }}
          >
            <h6 className="footer-title">Newsletter</h6>
            <fieldset className="w-80">
              <label className="mb-2 inline-block">
                Subscribe to our Newsletter
              </label>
              <div className="join">
                <input
                  ref={emailRef}
                  type="email"
                  placeholder="johnsmith@gmail.com"
                  className="input input-bordered join-item"
                  required
                  max={40}
                />
                <button
                  type="submit"
                  disabled={subscribing}
                  className={`btn btn-success join-item bg-green-700 ${
                    subscribing && 'bg-green-700/50'
                  } border-0 text-white shadow-none hover:bg-green-900`}
                >
                  {subscribing ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
            </fieldset>
          </form>
        </div>
        <div className="footer items-center px-4 rounded-2xl sm:footer-horizontal md:justify-normal">
          <aside>
            <div className="text-xl font-bold cursor-pointern text-nowrap">
              <Link to="/">
                <span className="text-white bg-green-700 rounded-md p-1">
                  NG
                </span>
                -LPRES
              </Link>
            </div>
          </aside>
          <nav>
            <div className="grid grid-flow-col gap-2 text-2xl text-green-700">
              {socialsIcons.map(({ icon, link }, index) => (
                <a
                  target="_blank"
                  key={index}
                  className="cursor-pointer hover:text-green-900 transition-colors"
                  href={link}
                >
                  {icon}
                </a>
              ))}
            </div>
          </nav>
        </div>
        <div className="p-4 mt-3">
          <div className="border-t-1 pt-4 border-gray-400">
            <p className="text-xs text-gray-700">
              &copy; {date.getFullYear()} Livestock Productivity & Resilience
              Support Project (L-PRES). All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
