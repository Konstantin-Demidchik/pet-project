import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import AvatarImg from './storybook.jpg';

const meta: Meta<typeof Select> = {
    title: 'shared/Select',
    component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
    args: {
        placeholder: 'Укажите значение',
        options: [
            { label: 'Первый пункт', value: '1' },
            { label: 'Второй пункт', value: '2' },
            { label: 'Третий пункт', value: '3' }
        ]
    }
};