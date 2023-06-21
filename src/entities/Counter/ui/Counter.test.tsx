import { screen } from '@testing-library/react'
import { Counter } from './Counter';
import { userEvent } from '@storybook/testing-library';
import { componentRender } from 'shared/lib/tests/componentRender';

describe('Counter Test', () => {

    test('Test component', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: { value: 10 }
            }
        });
        expect(screen.getByTestId('counter-title')).toHaveTextContent("10");
    });

    test('increment', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: { value: 10 }
            }
        });

        userEvent.click(screen.getByTestId('counter-increment'));

        expect(screen.getByTestId('counter-title')).toHaveTextContent("11");
    });

    test('decrement', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: { value: 10 }
            }
        });

        userEvent.click(screen.getByTestId('counter-decrement'));

        expect(screen.getByTestId('counter-title')).toHaveTextContent("9");
    });
});
