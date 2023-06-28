/* eslint-disable i18next/no-literal-string */
import styles from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData/getUserAuthData';
import { userActions } from 'entities/User';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
        setIsAuthModal(false);
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(styles.Navbar, {}, [className])}>
                <div className={styles.links}>
                    <Button
                        theme={ThemeButton.CLEAR_INVERTED}
                        onClick={onLogout}>
                        {t('LogOut')}
                    </Button>
                </div>
            </div>
        )
    }


    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <div className={styles.links}>
                {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
                <Button
                    theme={ThemeButton.CLEAR_INVERTED}
                    onClick={onShowModal}>
                    {t('LogIn')}
                </Button>
            </div>
        </div>
    );
};
