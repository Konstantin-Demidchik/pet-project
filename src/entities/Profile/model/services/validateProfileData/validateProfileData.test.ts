import { validateProfileData } from './validateProfileData';
import { Profile, ValidateProfileError } from '../../types/profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

const data = {
    first: "Kostya",
    lastname: "Demidchik",
    age: 22,
    currency: Currency.RUB,
    country: Country.Russia,
    city: "Minsk",
    username: "admin",
}

describe('validateProfileData.test ', () => {

    test('success', () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('FirstName error', () => {
        const result = validateProfileData({...data, lastname: ''})

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('age error', () => {
        const result = validateProfileData({ ...data, age: undefined  })

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('country error', () => {
        const result = validateProfileData({ ...data, country: undefined  })

        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('no data error', () => {
        const result = validateProfileData(undefined)

        expect(result).toEqual([ValidateProfileError.NO_DATA]);
    });
});