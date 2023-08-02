import React, { useCallback } from 'react';
import { Currency } from '../../model/types/currency';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';

interface CurrencySelectProps {
    value?: string;
    className?: string;
    readonly?: boolean;
    onChange?: (value: Currency) => void;
}

const options = [
    { label: Currency.EUR, value: Currency.EUR },
    { label: Currency.RUB, value: Currency.RUB },
    { label: Currency.USD, value: Currency.USD }
]

export const CurrencySelect = (props: CurrencySelectProps ) => {
    const { t } = useTranslation();
    const { className, value, readonly, onChange } = props;

    const onChangeHandler = useCallback((item: string) => {
        onChange?.(item as Currency);
    }, [onChange]);

    return (
        <Select
            placeholder={t('Currency')}
            value={value} 
            options={options} 
            className={className} 
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
};
