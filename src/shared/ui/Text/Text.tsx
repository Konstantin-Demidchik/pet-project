import React, { memo } from 'react';

import styles from './Text.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export enum ThemeText {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center'
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: ThemeText;
    align?: TextAlign;
}



export const Text = memo(({title, text, className, theme = ThemeText.PRIMARY, align = TextAlign.LEFT} : TextProps ) => {

    return (
        <div className={classNames(styles.Text, {}, [ className, styles[theme], styles[align] ])}>
            <p className={styles.title}>{title}</p>
            <p className={styles.text}>{text}</p>
        </div>
    );
});
