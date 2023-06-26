import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input,
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Light: Story = {
    args: {
        placeholder: 'Type text',
        value: 'Test text'
    }
};

export const Dark: Story = {
    args: {
        placeholder: 'Type text',
        value: 'Test text'
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};