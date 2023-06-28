import React from 'react';

import styles from './Text.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export enum ThemeText {
    PRIMARY = 'primary',
    ERROR = 'error',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: ThemeText
}

export const Text = ({title, text, className, theme = ThemeText.PRIMARY} : TextProps ) => {

    return (
        <div className={classNames(styles.Text, {}, [ className, styles[theme] ])}>
            <p className={styles.title}>{title}</p>
            <p className={styles.text}>{text}</p>
        </div>
    );
};
