import { useCallback } from 'react';
import { Country } from '../../model/types/country';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';

interface CountrySelectProps {
    value?: string;
    className?: string;
    readonly?: boolean;
    onChange?: (value: Country) => void;
}

const options = [
    { label: Country.Belarus, value: Country.Belarus },
    { label: Country.Russia, value: Country.Russia },
    { label: Country.Ukraine, value: Country.Ukraine }
]

export const CountrySelect = (props: CountrySelectProps ) => {
    const { t } = useTranslation();
    const { className, value, readonly, onChange } = props;

    const onChangeHandler = useCallback((item: string) => {
        onChange?.(item as Country);
    }, [onChange]);

    return (
        <Select
            placeholder={t('Country')}
            value={value} 
            options={options} 
            className={className} 
            onChange={onChangeHandler} 
            readonly={readonly}
        />
    );
};
