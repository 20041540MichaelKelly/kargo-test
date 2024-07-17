import { CourseProps, Courses } from "../../types/interfaces"; 
import './Courses.scss';
import CourseCard from "../CourseCard";

const CoursesComponent: React.FC<{ courses: Courses }> = ({courses}) => {
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