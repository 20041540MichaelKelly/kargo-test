// Importing necessary modules and types
import React from "react";
import { CourseProps } from "../../types/interfaces"; // Importing the CourseProps interface
import '../../styles/CourseCard.scss'; // Importing the styles for the CourseCard component

// Defining the CourseCard component
// This component accepts props of type CourseProps
const CourseCard: React.FC<CourseProps> = ({ title, description, image}) => {
  // The component returns a div with the class "course-card"
  // Inside this div, it renders an image and a div with the class "content"
  // The "content" div contains the title, description, and a button to view the course
  return (
      <div className="course-card">
          <img src={image} alt={title} /> {/* Displaying the course image */}
            <div className="content">
              <h3>{title}</h3> {/* Displaying the course title */}
              <p>{description}</p> {/* Displaying the course description */}
              <button>View this content  {'>'}</button> {/* Button to view the course */}
          </div>
      </div>
  );
};

// Exporting the CourseCard component as the default export
export default CourseCard;