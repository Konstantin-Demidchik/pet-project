import { StateSchema } from 'app/providers/StoreProvider';
import { fetchProfileData } from './fetchProfileData';
import { User, userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
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

describe('fetchProfileData.test', () => {

    test('success auth', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
         
    });

    test('error auth', async () => {
        
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({status: 403}));
        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
         
    });
});