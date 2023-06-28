import { Button, ThemeButton } from 'shared/ui/Button/Button';
import styles from './LoginForm.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text, ThemeText } from 'shared/ui/Text/Text';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const { username, password, isLoading, error } = useSelector(getLoginState)
    const dispatch = useDispatch();

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, []);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, []);

    const onLoginClick = useCallback(() => {
        // @ts-ignore
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(styles.LoginForm, {}, [className])}>
            <Text title={t("AuthForm")}/>
            {error && <Text text={error} theme={ThemeText.ERROR} />}
            <Input
                value={username}
                className={styles.input}
                placeholder={t('Username')}
                onChange={onChangeUsername}
                autofocus 
            />
            <Input
                value={password}
                className={styles.input}
                placeholder={t('Password')}
                onChange={onChangePassword}
            />
            <Button 
                theme={ThemeButton.OUTLINE} 
                disabled={isLoading} 
                onClick={onLoginClick} 
                className={styles.loginBtn}
            >
                {t('LogIn')}
            </Button>
        </div>
    );
});
