import React from 'react';

import { render, screen } from '@testing-library/react'
import { Button, ThemeButton } from './Button';

describe('Button Test', () => {
    test('Test component', () => {
        render(<Button>TEST</Button>)
        const btnElement = screen.getByText('TEST');
        expect(btnElement).toBeInTheDocument();
    });

    test('Test component with theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>)
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
