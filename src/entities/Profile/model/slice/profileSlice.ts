import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Profile, ProfileSchema } from '../types/profileSchema'

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<Profile>) => {
            state.data = action.payload;
        },
    },
})

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;