import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileData } from './getProfileData';
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

describe('getProfileData.test ', () => {
    test('Should return data', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { data: data }
        }
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('Should work with empty data ', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toBe(undefined);
    });
});