import React, { useState, useEffect } from 'react';
import createClient from "../clients";
import './utils.css';


interface Footer {
  mainImage: {
    asset: {
      _id: string;
      url: string;
    };
    alt: string;
  };

  title: string;
}

const Footer: React.FC = () => {
  const [footers, setFootersIcon] = useState<Footer[]>([]);
  useEffect(() => {
    createClient.fetch(`*[_type == "footer"]{
      mainImage: {
        asset->{
          _id,
          url
        },
        alt
      }, 
      title,
      slug,
    }`).then((data: Footer[]) => setFootersIcon(data))
      .catch(console.error);

  }, []);





  return (
    <footer className="footer">
      <div className="container block md:flex text-white">
        <div className=''>
          {footers.map((footer, slug) => (
            <div
              key={slug}
            >
              <img src={footer.mainImage.asset.url} alt={footer.title} className="HIcon" />
            </div>
          ))}
        </div>


        <nav>
          <ul>
            <li className='link-hover'><a href="/">Home</a></li>
            <li className='link-hover'><a href="/about">About</a></li>
            <li className='link-hover'><a href="/projects">Projects</a></li>
            <li className='link-hover'><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <form action="" className=''>
          <label htmlFor="email"></label>
          <input type="email" placeholder='subscribe to our news letter' id='email' className='mr-4 h-10 p-10 ' />
          <button type='submit' className='py-2 mt-4 button'>submit</button>
        </form>
        <p className='cursor-pointer'>&copy; {new Date().getFullYear()} <a href="https://www.zekkah.com/" target='blank'>ZEKKAH.COM</a> . All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
