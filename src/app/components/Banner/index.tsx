'use client';

// Importing necessary modules
import React from 'react';
import '../../styles/Banner.scss'; // Importing the styles for the Banner component
import BannerImage from '../../images/illustration 1.png'; // Importing the banner image

// Defining the Banner component
const Banner: React.FC = () => {
  // The component returns a section with the class "banner"
  // Inside this section, it renders a div with the class "banner-image" and a div with the class "container"
  // The "banner-image" div contains the banner image
  // The "container" div contains a div with the class "banner-content"
  // The "banner-content" div contains a heading, a paragraph, and a button
  return (
      <section className="banner">
          <div className="banner-image">
          <img src={BannerImage.src} alt="Frontend Development" /> {/* Displaying the banner image */}
        </div>
      <div className="container">
        <div className="banner-content">
          <h1>Frontend Development: From Beginner to Frontend Engineer</h1> {/* Displaying the heading */}
          <p>Learn the essential skills of frontend development, from HTML and CSS to JavaScript. Then choose a path between React, Angular, Vue, and Svelte. Build real-world projects and gain the confidence to land a job as a frontend engineer.</p> {/* Displaying the paragraph */}
          <button>Begin your journey</button> {/* Displaying the button */}
        </div>
      </div>
    </section>
  );
};

// Exporting the Banner component as the default export
export default Banner;