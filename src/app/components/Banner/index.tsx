'use client';

import React from 'react';
import '../../styles/Banner.scss'; 
import BannerImage from '../../images/illustration 1.png'; 

const Banner: React.FC = () => {
  return (
      <section className="banner">
          <div className="banner-image">
          <img src={BannerImage.src} alt="Frontend Development" /> 
        </div>
      <div className="container">
        <div className="banner-content">
          <h1>Frontend Development: From Beginner to Frontend Engineer</h1>
          <p>Learn the essential skills of frontend development, from HTML and CSS to JavaScript. Then choose a path between React, Angular, Vue, and Svelte. Build real-world projects and gain the confidence to land a job as a frontend engineer.</p>
          <button>Begin your journey</button>
        </div>
        
      </div>
    </section>
  );
};

export default Banner;