import type { Meta, StoryObj } from '@storybook/react';
import Header from '../app/components/Header';

const meta = {
    title: 'Landing Page/Header',
    component: Header,
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Basic: Story = {
    args: {
        title: 'Create Next App',
        description: 'Generated by create next app',
    },
};

Basic.storyName = "Default";