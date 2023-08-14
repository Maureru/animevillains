import React from 'react';
import { BsGithub, BsLinkedin, BsInstagram, BsTwitter } from 'react-icons/bs';
import avatar from '../../assets/avatar2.png';
import { Link } from 'react-router-dom';

interface indexProps {}

const Footer: React.FC<indexProps> = () => {
  return (
    <div className=" p-4 flex items-center">
      <div className="grow"></div>
      <div>
        <h1 className="text-center">
          made with love by <span className="font-bold">xMau</span>
        </h1>
        <div className="mt-4 flex items-end justify-center gap-4">
          <div className="text-3xl">
            <Link to="https://www.instagram.com/mauxxix_">
              <BsInstagram />
            </Link>
          </div>
          <div className="text-3xl">
            <Link to="https://github.com/Maureru">
              <BsGithub />
            </Link>
          </div>
          <div className="w-11 animate-bounce outline aspect-square rounded-full">
            <img alt="logo" className="object-cover" src={avatar} />
          </div>
          <div className="text-3xl">
            <Link to="https://www.linkedin.com/in/maurel-marapao-462581251/">
              <BsLinkedin />
            </Link>
          </div>
          <div className="text-3xl">
            <Link to="https://twitter.com/mauuxxix">
              <BsTwitter />
            </Link>
          </div>
        </div>
      </div>
      <div className="grow"></div>
    </div>
  );
};
export default Footer;
