import {useState} from 'react';

import styles from './Sidebar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className} : SidebarProps ) => {
    const [ collapsed, setCollapsed ] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    }

    return (
        <div className={classNames(styles.Sidebar, {[styles.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>Toggle</button>
            <div className={styles.switchers}>
                {/* LangSwitcher */}
                <ThemeSwitcher />
            </div>
        </div>
    );
};
