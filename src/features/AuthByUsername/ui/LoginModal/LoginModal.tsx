import { Modal } from 'shared/ui/Modal/Modal';
import styles from './LoginModal.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
    const { isOpen, onClose, className } = props;
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            className={classNames(styles.LoginModal, {}, [className])}
            lazy
        >
            <Suspense fallback={<Loader/>}>
                <LoginFormAsync />
            </Suspense>
        </Modal>
    );
};