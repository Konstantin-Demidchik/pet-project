import React, { useCallback, useEffect, useRef, useState, useMemo } from 'react';
import { Portal } from 'shared/ui/Portal/Portal';

import styles from './Modal.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';

interface ModalProps {
    className?: string;
    children?: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

const ANIMATION_CLOSING_MODAL = 300;

export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose } = props;
    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const { theme } = useTheme();

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_CLOSING_MODAL)
        }
    }, [onClose]);

    const onClickContent = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    }, []);

    const onKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler])

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        }
    }, [isOpen, onKeyDown]);

    const mods: Record<string, boolean> = {
        [styles.opened]: isOpen,
        [styles.closing]: isClosing,
    };

    return (
        <Portal>
            <div className={classNames(styles.Modal, mods, [className, theme, 'app-modal'])}>
                <div className={styles.overlay} onClick={closeHandler}>
                    <div
                        className={styles.content}
                        onClick={onClickContent}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
