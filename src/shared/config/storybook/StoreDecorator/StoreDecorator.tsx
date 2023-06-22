import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export const StoreDecorator = (
    StoryComponent: StoryFn, 
    initialState?: DeepPartial<StateSchema>
) => (
    <StoreProvider initialState={initialState}>
        <StoryComponent />
    </StoreProvider>
);
