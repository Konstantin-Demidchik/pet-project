import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError.test ', () => {
    test('Should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { error: "Test error" }
        }
        expect(getLoginError(state as StateSchema)).toBe("Test error");
    });

    test('Should work with empty state ', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginError(state as StateSchema)).toBe(undefined);
    });
});