import { useSelector } from 'react-redux';

import { 
    ProfileCard, 
    ValidateProfileError, 
    fetchProfileData, 
    getProfileData, 
    getProfileError, 
    getProfileForm, 
    getProfileIsLoading, 
    getProfileReadOnly, 
    getProfileValidateErrors, 
    profileActions, 
    profileReducer 
} from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Text, ThemeText } from 'shared/ui/Text/Text';

const intitalReducers: ReducersList = { profile: profileReducer };

const ProfilePage = () => {
    const { t } = useTranslation('profile');

    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadOnly);
    const validateErrors = useSelector(getProfileValidateErrors);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData());
        }
    }, [dispatch]);

    const onChangeFirstName = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ first: value }))
    }, [dispatch]);

    const onChangeLastName = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ lastname: value }))
    }, [dispatch]);

    const onChangeCity = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ city: value }))
    }, [dispatch]);

    const onChangeAge = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value) }))
    }, [dispatch]);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ username: value }))
    }, [dispatch]);

    const onChangeAvatar = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ avatar: value }))
    }, [dispatch]);

    const onChangeCurrency = useCallback((value: Currency) => {
        dispatch(profileActions.updateProfile({ currency: value }))
    }, [dispatch]);

    const onChangeCountry = useCallback((value: Country) => {
        dispatch(profileActions.updateProfile({ country: value }))
    }, [dispatch]);

    const validateErrorTranslates = {
        [ValidateProfileError.INCORRECT_USER_DATA]: t('IncorrectUserData'),
        [ValidateProfileError.INCORRECT_AGE]: t('IncorrectAge'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('IncorrectCountry'),
        [ValidateProfileError.NO_DATA]: t('IncorrectNoData'),
        [ValidateProfileError.SERVER_ERROR]: t('IncorrectServerError')
    }


    return <DynamicModuleLoader reducers={intitalReducers} removeAfterUnmount >
        <div>
            <ProfilePageHeader />
            {validateErrors?.length && validateErrors?.map(err => (
                <Text key={err} theme={ThemeText.ERROR} text={validateErrorTranslates[err]} />
            ))}
            <ProfileCard
                data={formData}
                isLoading={isLoading}
                error={error}
                readonly={readonly}
                onChangeFirstName={onChangeFirstName}
                onChangeLastName={onChangeLastName}
                onChangeCity={onChangeCity}
                onChangeAge={onChangeAge}
                onChangeUsername={onChangeUsername}
                onChangeAvatar={onChangeAvatar}
                onChangeCurrency={onChangeCurrency}
                onChangeCountry={onChangeCountry}
            />
        </div>
       
    </DynamicModuleLoader>
}

export default ProfilePage;
