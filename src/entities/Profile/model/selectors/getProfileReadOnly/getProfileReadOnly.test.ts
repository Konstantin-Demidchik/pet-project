import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileReadOnly } from './getProfileReadOnly';

describe('getProfileReadOnly.test ', () => {
    test('Should return readonly', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { readonly: false }
        }
        expect(getProfileReadOnly(state as StateSchema)).toBe(false);
    });

    test('Should work with empty data ', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileReadOnly(state as StateSchema)).toBe(undefined);
    });
});