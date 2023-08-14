import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User, UserSchema } from '../types/userSchema'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

const initialState: UserSchema = {
    authData: undefined,
    _inited: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state: UserSchema, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state: UserSchema) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            if (user) {
                state.authData = JSON.parse(user);
            }
            state._inited = true;
        },
        logout: (state: UserSchema) => {
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
            state.authData = undefined;
        },
    },
})

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;