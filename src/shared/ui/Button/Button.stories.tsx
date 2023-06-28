import type { Meta, StoryObj } from '@storybook/react';
import { Button, SizeButton, ThemeButton } from './Button';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    decorators: [ThemeDecorator(Theme.LIGHT)]
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
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const Background: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
        children: 'Test',
        theme: ThemeButton.BACKGROUND
    }
};

export const BackgroundInverted: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
        children: 'Test',
        theme: ThemeButton.BACKGROUND_INVERTED
    }
};

export const Square: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
        children: '>',
        theme: ThemeButton.BACKGROUND_INVERTED,
        square: true
    }
};

export const SquareDark: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
        children: '>',
        theme: ThemeButton.BACKGROUND_INVERTED,
        square: true
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const SquareSizeL: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
        children: '>',
        theme: ThemeButton.BACKGROUND_INVERTED,
        square: true,
        size: SizeButton.L
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const SquareSizeM: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
        children: '>',
        theme: ThemeButton.BACKGROUND_INVERTED,
        square: true,
        size: SizeButton.M
    }
};

export const SquareSizeXL: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
        children: '>',
        theme: ThemeButton.BACKGROUND_INVERTED,
        square: true,
        size: SizeButton.XL
    }
};

export const Disabled: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
        children: 'Log In',
        theme: ThemeButton.OUTLINE,
        disabled: true,
    }
};

