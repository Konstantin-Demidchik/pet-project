import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading.test', () => {
    test('Should return isLoading true', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true
            }
        }
        expect(getLoginIsLoading(state as StateSchema)).toBe(true);
    });

    test('Should return isLoading false', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: false
            }
        }
        expect(getLoginIsLoading(state as StateSchema)).toBe(false);
    });
});