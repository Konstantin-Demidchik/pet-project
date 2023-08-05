import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

const data = {
    first: "Kostya",
    lastname: "Demidchik",
    age: 22,
    currency: Currency.RUB,
    country: Country.Russia,
    city: "Minsk",
    username: "admin",
}

describe('getProfileForm.test ', () => {
    test('Should return form', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { form: data }
        }
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });

    test('Should work with empty data ', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toBe(undefined);
    });
});