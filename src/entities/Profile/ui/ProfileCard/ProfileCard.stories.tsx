import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

import AvatarImg from 'shared/assets/tests/avatar.jpg';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Light: Story = {
    args: {
        data: {
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
};

export const Dark: Story = {
    args: {
        data: {
            first: "Kostya",
            lastname: "Demidchik",
            age: 22,
            currency: Currency.RUB,
            country: Country.Russia,
            city: "Minsk",
            username: "admin",
            avatar: AvatarImg
        }
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const WithError: Story = {
    args: {
        error: "Error string text"
    }
};

export const Loading: Story = {
    args: {
        isLoading: true
    }
};