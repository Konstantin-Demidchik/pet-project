import type { Meta, StoryObj } from '@storybook/react';
import { Text, ThemeText } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
    decorators: [ThemeDecorator(Theme.LIGHT)]
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Light: Story = {
    args: {
        title: 'Title Title Title',
        text: 'Description Description Description'
    }
};

export const Dark: Story = {
    args: {
        title: 'Title Title Title',
        text: 'Description Description Description'
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const ERROR: Story = {
    args: {
        title: 'Title Title Title',
        text: 'Description Description Description',
        theme: ThemeText.ERROR,
    },
};

export const OnlyTitle: Story = {
    args: {
        title: 'Title Title Title',
    }
};

export const OnlyText: Story = {
    args: {
        text: 'Description Description Description'
    }
};
