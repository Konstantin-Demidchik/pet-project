import type { Meta, StoryObj } from '@storybook/react';

import { PageError } from './PageError';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof PageError> = {
    title: 'widgets/PageError',
    component: PageError
};

export default meta;
type Story = StoryObj<typeof PageError>;

export const PageErrorLight: Story = {};

export const PageErrorDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};
