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
      <div className="container grid gap-[20px] md:flex text-white">

        
        <div className='flex justify-center'>
          <a href="https://wa.me/message/HHHTEN4NCWRNL1" target='blank' className='mr-3'>
            <img src="/Icons/whatsapp.png" alt="" className='flex justify-self-center self-center w-[35px] h-[35px]' />
          </a>
          <a href="#/" target='blank' className='mr-3'>
            <img src="/Icons/facebook.png" alt="" className='flex justify-self-center self-center w-[35px] h-[35px]' />
          </a>
          <a href="https://twitter.com/edenpison" target='blank' className='mr-3'>
            <img src="/Icons/twitter (1).png" alt="" className=' flex justify-self-center self-center w-[35px] h-[35px]' />
          </a>
          <a href="https://www.tiktok.com/@zekkah.com" target='blank' className='mr-3'>
            <img src="/Icons/tik-tok (1).png" alt="" className=' flex justify-self-center self-center w-[35px] h-[35px]' />
          </a>
        </div>


        <nav>
          <ul className='flex flex-col justify-center items-center'>
            <li className='link-hover py-4 px-6 rounded-[15px] max-w-[250px] min-w-[150px]'><a href="#/" className=' font-bold'>Home</a></li>
            <li className='link-hover py-4 px-6 rounded-[15px] max-w-[250px] min-w-[150px]'><a href="#/about" className=' font-bold'>About</a></li>
            <li className='link-hover py-4 px-6 rounded-[15px] max-w-[250px] min-w-[150px]'><a href="#/projects" className=' font-bold'>Projects</a></li>
            <li className='link-hover py-4 px-6 rounded-[15px] max-w-[250px] min-w-[150px]'><a href="#/contact" className=' font-bold'>Contact</a></li>
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
