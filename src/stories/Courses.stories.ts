import type { Meta, StoryObj } from '@storybook/react';
import CoursesComponent from '../app/components/Courses';
import { Courses } from '../app/types/interfaces';

const sampleCourses: Courses = [
    {
        title: 'HTML and CSS',
        description: 'This beginner-friendly course will teach you the fundamentals of HTML and CSS.',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: 'JavaScript',
        description: 'This comprehensive course will teach you the fundamentals of JavaScript.',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: 'React',
        description: 'Learn how to build interactive UIs using React.',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: 'Angular',
        description: 'Learn the Angular framework for building scalable applications.',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: 'Vue',
        description: 'Get started with Vue.js for building reactive interfaces.',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: 'Svelte',
        description: 'Learn Svelte for building high-performance web applications.',
        image: 'https://via.placeholder.com/150',
    },
];

const meta: Meta<typeof CoursesComponent> = {
    title: 'Landing Page/Courses',
    component: CoursesComponent,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        courses: sampleCourses,
    },
};

Basic.storyName = "Default";