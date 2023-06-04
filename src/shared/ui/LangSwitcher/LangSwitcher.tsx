import { useTranslation } from 'react-i18next';
import styles from './LangSwitcher.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from '../Button/Button';

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const onToggleLang = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return (
        <Button
            onClick={onToggleLang}
            theme={ThemeButton.CLEAR}
            className={classNames(styles.LangSwitcher, {}, [className])}
        >
            {t('Язык')}
        </Button>
    );
};
