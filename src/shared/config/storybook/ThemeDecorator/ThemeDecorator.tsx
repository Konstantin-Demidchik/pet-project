import { StoryFn } from '@storybook/react';
import '../../../../app/styles/index.scss';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
    <ThemeProvider initialTheme={theme}>
        <div id="app" className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>

);
