import { Currency } from "entities/Currency";
import { ProfileSchema, ValidateProfileError } from "../types/profile";
import { profileActions, profileReducer } from "./profileSlice";
import { Country } from "entities/Country";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";

const data = {
    first: "Kostya",
    lastname: "Demidchik",
    age: 22,
    currency: Currency.RUB,
    country: Country.Russia,
    city: "Minsk",
    username: "admin",
}

describe('profileSlice.test', () => {
    test('set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false }

        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true)))
            .toEqual({ readonly: true });
    });

    test('cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } }

        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit()))
            .toEqual({
                readonly: true,
                validateErrors: [],
                data,
                form: data,
            });
    });

    test('update profile', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { username: 'test' } }

        expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({ username: "Updated test" })))
            .toEqual({
                data,
                form: { username: "Updated test"  }
            });
    });
    
    test('pending profile slice', () => {
        const state: DeepPartial<ProfileSchema> = { isLoading: false, validateErrors: [ValidateProfileError.SERVER_ERROR] }

        expect(profileReducer(state as ProfileSchema, updateProfileData.pending))
            .toEqual({
                isLoading: true,
                validateErrors: undefined
            });
    });

    test('fulfilled profile slice', () => {
        const state: DeepPartial<ProfileSchema> = { isLoading: true }

        expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, '')))
            .toEqual({
                validateErrors: undefined,
                readonly: true,
                isLoading: false,
                form: data,
                data: data
            });
    });
});