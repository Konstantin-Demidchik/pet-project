import React, { memo } from 'react';

import styles from './SidebarItem.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { SidebarItemType } from '../../model/items';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();
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
