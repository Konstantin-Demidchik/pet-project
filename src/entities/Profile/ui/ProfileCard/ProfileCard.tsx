import React from 'react';

import styles from './ProfileCard.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    return (
        <div className={classNames(styles.ProfileCard, {}, [className])}>
            <div className={styles.header}>
                <Text title={t('NameCard')} />
                <Button theme={ThemeButton.OUTLINE}>{t('Edit')}</Button>
            </div>
            <div className={styles.data}>
                <Input
                    className={styles.input}
                    value={data?.first}
                    placeholder={t('YourName')}
                />
                <Input
                    className={styles.input}
                    value={data?.lastname}
                    placeholder={t('YourLastName')}
                />
            </div>
        </div>
    );
};
