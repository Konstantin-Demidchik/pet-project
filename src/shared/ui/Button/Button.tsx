import React, { type ButtonHTMLAttributes, type FC } from 'react';

import styles from './Button.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export enum ThemeButton {
    CLEAR = 'clear',
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
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const { className, children, theme, square, size = SizeButton.M, ...otherProps } = props;
    return (
        <button 
            className={classNames(
                styles.Button, 
                { [styles.square]: square }, 
                [className, styles[theme], styles[size]], 
                square
            )} 
            {...otherProps}
        >
            {children}
        </button>
    );
};
