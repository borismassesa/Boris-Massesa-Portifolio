import React from 'react';
import { BsLinkedin, BsInstagram, BsGithub} from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsLinkedin />
    </div>
    <div>
      <BsGithub />
    </div>
    <div>
      <BsInstagram />
    </div>
  </div>
);

export default SocialMedia;
