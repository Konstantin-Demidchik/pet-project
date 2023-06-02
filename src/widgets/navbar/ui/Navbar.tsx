import styles from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {

    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main} className={styles.mainLink}>Главная</AppLink>
                <AppLink theme={AppLinkTheme.RED} to={RoutePath.about}>О сайте</AppLink>
            </div>
        </div>
    );
};


