import { profileReducer } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const intitalReducers: ReducersList = { profile: profileReducer };

const ProfilePage = () => {
    const { t } = useTranslation('profile');

    return <DynamicModuleLoader reducers={intitalReducers} removeAfterUnmount >
        <div>
            {t('Title')}
        </div>
       
    </DynamicModuleLoader>
}

export default ProfilePage;
