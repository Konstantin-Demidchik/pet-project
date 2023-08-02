import React, { CSSProperties, useMemo } from 'react';

import styles from './Avatar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface AvatarProps {
    src?: string;
    size?: number;
    className?: string;
    alt?: string;
}

export const Avatar = (props: AvatarProps ) => {
    const { src, size, className, alt } = props;

    const inlineStyle = useMemo<CSSProperties>(() => ({
        width: size,
        height: size
    }), [size]);

    return (
        <img src={src} alt={alt} className={classNames(styles.Avatar, {}, [className])} style={inlineStyle} />
    );
};
