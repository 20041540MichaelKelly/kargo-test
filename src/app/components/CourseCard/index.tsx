'use client';

import React from "react";
import { CourseProps } from "../../types/interfaces"; 
import '../../styles/CourseCard.scss';

const CourseCard: React.FC<CourseProps> = ({ title, description, image}) => {
  return (
      <div className="course-card">
          <img src={image} alt={title} />
            <div className="content">

      <h3>{title}</h3>
          <p>{description}</p>
          <button>View this content  {'>'}</button>
          </div>
          </div>
  );
};

export default CourseCard;