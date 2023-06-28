import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername';

const defaultReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
}

export const StoreDecorator = (
    state: DeepPartial<StateSchema>, 
    asyncReducer?: DeepPartial<ReducersMapObject<StateSchema>>
) => (StoryComponent: StoryFn) => (
    <StoreProvider initialState={state} asyncReducers={{...defaultReducers, ...asyncReducer}}>
        <StoryComponent />
    </StoreProvider>
);
