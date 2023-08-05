import React from 'react';

import styles from './ProfileCard.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, ThemeText } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

import { Input } from 'shared/ui/Input/Input';
import { Profile } from '../../model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Select } from 'shared/ui/Select/Select';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    onChangeLastName?: (value: string) => void;
    onChangeFirstName?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeCurrency?: (value: Currency) => void;
    onChangeCountry?: (value: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { t } = useTranslation('profile');

    const {
        data,
        error,
        isLoading,
        readonly,
        className,
        onChangeFirstName,
        onChangeLastName,
        onChangeCity,
        onChangeAge,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(styles.ProfileCard, {}, [styles.loading])}>
                <Loader />
            </div>
        )
    }

    if (error) {
        return (
            <div className={classNames(styles.ProfileCard, {}, [styles.error])}>
                <Text
                    title={t('ErrorProfileLoading')}
                    text={t('ErrorProfileLoadingText')}
                    theme={ThemeText.ERROR}
                    align={TextAlign.CENTER}
                />
            </div>
        )
    }

    return (
        <div className={classNames(styles.ProfileCard, {[styles.readonly]: readonly}, [className])}>
            {data?.avatar && <div className={styles.avatarWrapper}><Avatar src={data.avatar} /></div>}
            <Input
                className={styles.input}
                value={data?.first}
                placeholder={t('YourName')}
                readonly={readonly}
                onChange={onChangeFirstName}
            />
            <Input
                className={styles.input}
                value={data?.lastname}
                placeholder={t('YourLastName')}
                readonly={readonly}
                onChange={onChangeLastName}
            />
            <Input
                className={styles.input}
                value={data?.city}
                placeholder={t('YourCity')}
                readonly={readonly}
                onChange={onChangeCity}
            />
            <Input
                className={styles.input}
                value={data?.age}
                placeholder={t('YourAge')}
                readonly={readonly}
                onChange={onChangeAge}
            />
            <Input
                className={styles.input}
                value={data?.username}
                placeholder={t('YourUsername')}
                readonly={readonly}
                onChange={onChangeUsername}
            />
            <Input
                className={styles.input}
                value={data?.avatar}
                placeholder={t('YourAvatar')}
                readonly={readonly}
                onChange={onChangeAvatar}
            />
            <CurrencySelect 
                value={data?.currency} 
                onChange={onChangeCurrency} 
                className={styles.input}
                readonly={readonly}
            />

            <CountrySelect 
                value={data?.country}
                onChange={onChangeCountry} 
                className={styles.input} 
                readonly={readonly}
            />

        </div>
    );
};
