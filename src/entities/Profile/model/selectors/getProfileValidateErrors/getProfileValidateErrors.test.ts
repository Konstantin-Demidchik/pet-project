import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors.test ', () => {
    test('Should return validateErrors', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { validateErrors: [] }
        }
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([]);
    });

    test('Should work with empty data ', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toBe(undefined);
    });
});