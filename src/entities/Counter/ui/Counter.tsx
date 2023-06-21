import styles from './Counter.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useTranslation } from 'react-i18next';

interface CounterProps {
    className?: string;
}

export const Counter = ({className} : CounterProps ) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    }

    const decrement = () => {
        dispatch(counterActions.decrement());
    }

    return (
        <div className={classNames(styles.Counter, {}, [className])}>
            <h1 data-testid="counter-title">{counterValue}</h1>
            <Button data-testid="counter-increment" onClick={increment}>{t('Increment')}</Button>
            <Button data-testid="counter-decrement" onClick={decrement}>{t('Decrement')}</Button>
        </div>
    );
};
