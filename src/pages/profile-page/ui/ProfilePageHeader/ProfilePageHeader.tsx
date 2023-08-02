import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './ProfilePageHeader.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { getProfileReadOnly, profileActions, updateProfileData } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';


interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({className} : ProfilePageHeaderProps ) => {
    const { t } = useTranslation('profile');
    const readonly = useSelector(getProfileReadOnly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    return (
        <div className={classNames(styles.ProfilePageHeader, {}, [className])}>
            <Text title={t('NameCard')} />
            {readonly ? (
                <Button theme={ThemeButton.OUTLINE} onClick={onEdit}>{t('Edit')}</Button>
            ) : (
                <div>
                    <Button theme={ThemeButton.OUTLINE} onClick={onSave} className={styles.saveBtn}>{t('Save')}</Button>
                    <Button theme={ThemeButton.OUTLINE_RED} onClick={onCancelEdit}>{t('Cancel')}</Button>
                </div>

            )}
            
        </div>
    );
};
