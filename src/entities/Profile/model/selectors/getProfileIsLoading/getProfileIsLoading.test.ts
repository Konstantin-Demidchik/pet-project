import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading.test ', () => {
    test('Should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { isLoading: false }
        }
        expect(getProfileIsLoading(state as StateSchema)).toBe(false);
    });

    test('Should work with empty data ', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileIsLoading(state as StateSchema)).toBe(undefined);
    });
});