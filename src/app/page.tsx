'use client';


import React, { useEffect, useState } from 'react';
import Header from '../../src/app/components/Header';
import Banner from '../../src/app/components/Banner';
import Courses from '../../src/app/components/Courses';
//import Footer from '../components/Footer';
import { getCourseData } from './utils/supabaseQueries';
import { CourseProps } from './types/interfaces';

const Home: React.FC = () => {
const [courseData, setCourseData] = useState<CourseProps[] | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCourseData();
      setCourseData(data);
    };

    fetchData();
  }, []);
  return (
    <div>
      <Header />
      <Banner />
      {courseData && <Courses courses={courseData} />}
    </div>
  );
};

export default Home;
