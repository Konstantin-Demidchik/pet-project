import { render, screen, fireEvent } from '@testing-library/react'
import { Sidebar } from './Sidebar';
import { componentRender } from 'shared/lib/tests/componentRender';

describe('Sidebar Test', () => {
    test('Test component', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Test toggle component', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();

        fireEvent.click(screen.getByTestId('sidebar-toggle'));

        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
