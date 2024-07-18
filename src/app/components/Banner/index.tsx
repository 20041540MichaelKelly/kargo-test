'use client';


import React from 'react';
import '../../styles/Banner.scss'; // Import the Sass file
import BannerImage from '../../images/illustration 1.png'; // Import your banner image

const Banner: React.FC = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner-content">
          <h1>Frontend Development: From Beginner to Frontend Engineer</h1>
          <p>Learn the essential skills of frontend development, from HTML and CSS to JavaScript. Then choose a path between React, Angular, Vue, and Svelte. Build real-world projects and gain the confidence to land a job as a frontend engineer.</p>
          <button>Begin your journey</button>
        </div>
        <div className="banner-image">
          <img src={BannerImage.src} alt="Frontend Development" /> {/* Use BannerImage directly */}
        </div>
      </div>
    </section>
  );
};

export default Banner;