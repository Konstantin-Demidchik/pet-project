/* eslint-disable i18next/no-literal-string */
import { ChangeEvent, memo, useMemo } from 'react';

import styles from './Select.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export interface SelectOption {
    label: string;
    value: string;
}

interface SelectProps {
    placeholder?: string;
    className?: string;
    value?: string;
    options: SelectOption[];
    readonly?: boolean;
    onChange?: (item: string) => void;
}

export const Select = memo((props: SelectProps) => {
    const { placeholder, className, value, options, readonly, onChange } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    }

    const optionsList = useMemo(() => {
        return options?.map(({value, label}) => (
            <option key={value} value={value}>{label}</option>
        ))
    }, [options]);

    return (
        <div className={classNames(styles.Select, {[styles.readonly]: readonly}, [className])}>
            {placeholder && <div className={styles.placeholder}>{`${placeholder}>`}</div>}
            <select value={value} className={styles.selectWrapper} onChange={onChangeHandler} disabled={readonly}>
                {optionsList}
            </select>
        </div>

    );
});
