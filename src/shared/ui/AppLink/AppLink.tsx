import { type LinkProps, Link } from 'react-router-dom';
import { memo, type FC } from 'react';
import styles from './AppLink.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red'
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}

const AppLink: FC<AppLinkProps> = memo((props: AppLinkProps) => {
    const { className, children, to, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;
    return (
        <Link 
            to={to} 
            className={classNames(styles.AppLink, {}, [className, styles[theme]])} 
            {...otherProps}
        >
            {children}
        </Link>
    );
});

export default AppLink;
