import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
    test('Should return username', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: "Test name"
            }
        }
        expect(getLoginUsername(state as StateSchema)).toBe("Test name");
    });

    test('Should work with empty state ', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toBe('');
    });
});