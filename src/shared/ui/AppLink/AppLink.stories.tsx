import type { Meta, StoryObj } from '@storybook/react';

import AppLink, { AppLinkTheme } from './AppLink';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        to: '/',
        children: 'Text'
    }
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY
    }
};

export const PrimaryDark: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const Secondary: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY
    }
};

export const SecondaryDark: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const Red: Story = {
    args: {
        theme: AppLinkTheme.RED
    }
};
