import React from "react";
import { CourseProps } from "../../types/interfaces"; 

const styles = {
  card: { maxWidth: 150 },
  media: { height: 250 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

const CourseCard: React.FC<CourseProps> = ({ title, description, image }) => {
    
  return (
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.media} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default CourseCard;