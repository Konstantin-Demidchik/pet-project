import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername';
import { profileReducer } from 'entities/Profile';

const defaultReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
    profile: profileReducer
}

export const StoreDecorator = (
    state: DeepPartial<StateSchema>, 
    asyncReducer?: DeepPartial<ReducersMapObject<StateSchema>>
) => (StoryComponent: StoryFn) => (
    <StoreProvider initialState={state} asyncReducers={{...defaultReducers, ...asyncReducer}}>
        <StoryComponent />
    </StoreProvider>
);
