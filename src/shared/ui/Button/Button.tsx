import React, { type ButtonHTMLAttributes, type FC } from 'react';

import styles from './Button.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export enum ThemeButton {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum SizeButton {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    square?: boolean;
    size?: SizeButton;
    disabled?: boolean
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const { 
        className, 
        children, 
        theme, 
        square, 
        size = SizeButton.M,
        disabled, 
        ...otherProps 
    } = props;

    return (
        <button 
            type="button"
            className={classNames(
                styles.Button, 
                { [styles.square]: square, [styles.disabled]: disabled }, 
                [className, styles[theme], styles[size]], 
                square
            )}
            disabled={disabled} 
            {...otherProps}
        >
            {children}
        </button>
    );
};
