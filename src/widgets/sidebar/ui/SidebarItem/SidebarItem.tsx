import React, { memo } from 'react';

import styles from './SidebarItem.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { SidebarItemType } from '../../model/items';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData/getUserAuthData';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (item?.authOnly && !isAuth) return null;

    return (
        <div className={classNames('', { [styles.collapsed]: collapsed }, [])}>
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                to={item.path}
                className={styles.item}
            >
                <item.Icon className={styles.icon} />
                <span className={styles.link}>{t(item.text)}</span>
            </AppLink>
        </div>
    );
});
