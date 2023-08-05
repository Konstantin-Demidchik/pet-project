import type { Meta, StoryObj } from '@storybook/react';
import ProfilePage from './ProfilePage';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import AvatarImg from 'shared/assets/tests/avatar.jpg';

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
    decorators: [StoreDecorator({
        profile: {
            form: {
                first: "Kostya",
                lastname: "Demidchik",
                age: 22,
                currency: Currency.RUB,
                country: Country.Russia,
                city: "Minsk",
                username: "admin",
                avatar: AvatarImg
            }
        }
    })]
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        profile: {
            form: {
                first: "Kostya",
                lastname: "Demidchik",
                age: 22,
                currency: Currency.RUB,
                country: Country.Russia,
                city: "Minsk",
                username: "admin",
                avatar: AvatarImg
            }
        }
    })]
};
