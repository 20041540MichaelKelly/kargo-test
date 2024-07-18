import React from "react";
import { CourseProps } from "../../types/interfaces"; 
import '../../styles/CourseCard.scss';

const CourseCard: React.FC<CourseProps> = ({ title, description, image}) => {
  return (
    <div className="course-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CourseCard;