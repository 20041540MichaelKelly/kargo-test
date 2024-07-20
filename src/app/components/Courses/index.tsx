'use client';

import { CourseProps, Courses } from "../../types/interfaces"; 
import '../../styles/Courses.scss';
import CourseCard from "../CourseCard";

// Defining the CoursesComponent component
// This component accepts a prop named courses of type Courses
const CoursesComponent: React.FC<{ courses: Courses }> = ({ courses }) => {
    /*
        The component returns a section with the class "courses"
        Inside this section, it renders a div with the class "container"
        The "container" div contains a heading and a div with the class "course-list"
        The "course-list" div maps over the courses array and renders a CourseCard component for each course 
    */
    
  return (
    <section className="courses">
      <div className="container">
        <h2>Our Curriculums</h2>
        <div className="course-list">
          {courses.map((course: CourseProps, index: number) => (
            <CourseCard
              key={index}
              title={course.title}
              description={course.description}
              image={course.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesComponent;