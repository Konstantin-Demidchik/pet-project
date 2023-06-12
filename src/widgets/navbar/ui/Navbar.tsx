import styles from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink 
                    theme={AppLinkTheme.SECONDARY} 
                    to={RoutePath.main} 
                    className={styles.mainLink}>
                    {t('Main')}
                </AppLink>
                <AppLink theme={AppLinkTheme.RED} to={RoutePath.about}>{t('About')}</AppLink>
            </div>
        </div>
    );
};
