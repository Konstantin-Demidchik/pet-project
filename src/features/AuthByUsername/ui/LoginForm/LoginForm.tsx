import { Button, ThemeButton } from 'shared/ui/Button/Button';
import styles from './LoginForm.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { memo, useCallback } from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import { loginActions, loginReducer, } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text, ThemeText } from 'shared/ui/Text/Text';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const dispatch = useAppDispatch();


    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, []);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, []);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        
        if(result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, password, username, onSuccess]);

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <div className={classNames(styles.LoginForm, {}, [className])}>
                <Text title={t("AuthForm")} />
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
        </DynamicModuleLoader>

    );
});

export default LoginForm;