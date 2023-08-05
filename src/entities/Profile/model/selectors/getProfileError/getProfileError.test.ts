import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError.test ', () => {
    test('Should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { error: 'Test Error' }
        }
        expect(getProfileError(state as StateSchema)).toBe('Test Error');
    });

    test('Should work with empty data ', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toBe(undefined);
    });
});