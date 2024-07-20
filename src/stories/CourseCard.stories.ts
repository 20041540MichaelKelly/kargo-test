// Importing necessary modules and types
import type { Meta, StoryObj } from '@storybook/react';
import CourseCard from '@/app/components/CourseCard'; // Importing the CourseCard component
import { CourseProps } from '@/app/types/interfaces'; // Importing the CourseProps interface

// Creating a sample course for the stories
const sampleCourse: CourseProps = {
    title: 'Course Title',
    description: 'Course Description',
    image: 'https://via.placeholder.com/150',
};

// Defining the metadata for the stories
const meta = {
    title: 'Landing Page/CourseCard', // The title of the component in the Storybook UI
    component: CourseCard, // The component being documented
} satisfies Meta<typeof CourseCard>; // Ensuring the metadata satisfies the Meta type

// Exporting the metadata as the default export
export default meta;

// Defining the type for the stories
type Story = StoryObj<typeof meta>;

// Defining the Basic story
export const Basic: Story = {
    args: sampleCourse // Passing the sample course as the arguments for the story
};
// Setting the name of the Basic story
Basic.storyName = "Default";

// Creating a sample course without a poster for the Exceptional story
const sampleNoCourse = { ...sampleCourse, poster_path: undefined };

// Defining the Exceptional story
export const Exceptional: Story = {
    args: sampleNoCourse // Passing the sample course without a poster as the arguments for the story
};