import React from 'react';
import { BsLinkedin, BsInstagram, BsGithub} from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='https://www.linkedin.com/in/boris-massesa/'>
      <BsLinkedin />
      </a>
    </div>
    <div>
      <a href='https://github.com/borismassesa'>
        <BsGithub />
      </a>
      
    </div>
    <div>
      <a href='https://www.instagram.com/le_sparten/'>
      <BsInstagram />
      </a>
      
    </div>
  </div>
);

export default SocialMedia;
