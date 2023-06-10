import { StoryFn } from '@storybook/react';
import '../../../../app/styles/index.scss';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
    <div className={`app ${theme}`}><StoryComponent /></div>
);