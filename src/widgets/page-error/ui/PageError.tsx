import React from 'react';

import styles from './PageError.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

interface PageErrorProps {
    className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const onReloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(styles.PageError, {}, [className])}>
            <h1>{t('ErrorPageTitle')}</h1>
            <button onClick={onReloadPage}>{t('ErrorPageReload')}</button>
        </div>
    );
};
