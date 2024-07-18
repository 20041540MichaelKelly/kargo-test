import type { Meta, StoryObj } from '@storybook/react';
import Banner from '@/app/components/Banner';
import { CourseProps } from '@/app/types/interfaces';

const sampleCourse: CourseProps = {
    title: 'Course Title',
    description: 'Course Description',
    image: 'https://via.placeholder.com/150',
};

const meta = {
    title: 'Landing Page/Banner',
    component: Banner,
} satisfies Meta<typeof Banner>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Basic: Story = {
    args: sampleCourse

};
Basic.storyName = "Default";

const sampleNoPoster = { ...sampleCourse, poster_path: undefined };
export const Exceptional: Story = {
    args: sampleNoPoster
};
Exceptional.storyName = "Exception";