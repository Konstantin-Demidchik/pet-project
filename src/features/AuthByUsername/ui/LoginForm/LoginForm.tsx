import { Button, ThemeButton } from 'shared/ui/Button/Button';
import styles from './LoginForm.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({className} : LoginFormProps ) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.LoginForm, {}, [className])}>
            <Input className={styles.input} placeholder={t('Username')} autofocus />
            <Input className={styles.input} placeholder={t('Password')}/>
            <Button className={styles.loginBtn}>{t('LogIn')}</Button>
        </div>
    );
};
