import type { Meta, StoryObj } from '@storybook/react';
import { Button, ThemeButton } from './Button';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
        children: 'Test'
    }
};

export const Clear: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
        children: 'Test',
        theme: ThemeButton.CLEAR
    }
};

export const OutlineLight: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
        children: 'Test',
        theme: ThemeButton.OUTLINE
    }
};

export const OutlineDark: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
        children: 'Test',
        theme: ThemeButton.OUTLINE
    }
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]
