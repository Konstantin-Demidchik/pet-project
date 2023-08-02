import React, { InputHTMLAttributes, memo, useState, useEffect, useRef } from 'react';

import styles from './Input.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    autofocus?: boolean;
    readonly?: boolean;
    onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = "text",
        placeholder,
        autofocus,
        readonly,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null)
    const [ isFocused, setIsFocused ] = useState(false);
    const [ caretPosition, setCaretPosition ] = useState(0);

    const isCaretVisable = isFocused && !readonly;

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref?.current?.focus()
        }
    }, [autofocus]);

    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        /*if (value.length < e.target.value.length) {
            setCaretPosition(e.target.value.length);
        }*/
    }

    const onBlur = () => {
        setIsFocused(false);
    }

    const onFocus = () => {
        setIsFocused(true);
    }

    const onSelect = (e: any) => {
        setCaretPosition(e.target.selectionStart);
    }

    return (
        <div className={classNames(styles.InputWrapper, { [styles.readonly]: readonly}, [className])}>
            {placeholder && <div className={styles.placeholder}>{`${placeholder}>`}</div>}
            <div className={styles.caretWrapper}>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeValue}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onSelect={onSelect}
                    readOnly={readonly}
                    {...otherProps}
                />
                {isCaretVisable && (
                    <span 
                        className={styles.caret} 
                        style={{ left: `${caretPosition * 9}px`}} 
                    />
                )}
            </div>

        </div>
    );
});
