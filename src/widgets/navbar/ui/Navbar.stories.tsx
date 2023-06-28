import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from './Navbar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof Navbar> = {
    title: 'widgets/Navbar',
    component: Navbar,
    decorators: [StoreDecorator({
        loginForm: {
            username: "Name",
            password: "Password"
        }
    })]
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const NavbarLight: Story = {};

export const NavbarDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};
