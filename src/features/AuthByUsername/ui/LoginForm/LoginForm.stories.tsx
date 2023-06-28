import type { Meta, StoryObj } from '@storybook/react';

import LoginForm from './LoginForm';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof LoginForm> = {
    title: 'feature/LoginForm',
    component: LoginForm,
    decorators: [StoreDecorator({
        loginForm: {
            username: "Name",
            password: "Password"
        }
    })]
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const WithError: Story = {
    decorators: [StoreDecorator({
        loginForm: {
            error: "Test Error",
            username: "Name",
            password: "Password"
        }
    })]
};
