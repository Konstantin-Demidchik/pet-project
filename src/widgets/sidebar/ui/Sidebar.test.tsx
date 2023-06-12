import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react'
import { Sidebar } from './Sidebar';
import { withTranslation } from 'react-i18next';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation';

describe('Sidebar Test', () => {
    test('Test component', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Test toggle component', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();

        fireEvent.click(screen.getByTestId('sidebar-toggle'));

        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
