'use client';

import { useQuery } from 'react-query';
import supabase from '../db/client';
import Courses from '../components/Courses'; 
import { CourseProps } from '../types/interfaces';
import Header  from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const fetchCourses = async () => {
    const { data, error } = await supabase.from('courses').select('*');
    if (error) {
        throw new Error('Error fetching courses: ' + error.message);
    }
    return data;
};

const Home: React.FC = () => {
    const { data: courses, isLoading, isError } = useQuery<CourseProps[], Error>('courses', fetchCourses);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching courses</div>;
    }

    return (
    <div>
      <Header />
      <Banner />
            <Courses courses={courses || []} />
            <Footer />
    </div>
  );
};

export default Home;