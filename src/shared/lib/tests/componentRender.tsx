import { I18nextProvider } from 'react-i18next';
import React, { ReactNode } from 'react';
import { render } from '@testing-library/react'
import i18nForTest from '../../config/i18n/i18nForTest';
import { MemoryRouter } from 'react-router-dom';

export interface ComponentRenderOptions {
    route?: string;
}

export function componentRender(component: ReactNode,  options: ComponentRenderOptions = {} ) {
    const { route = '/' } = options;
    return render(
        <MemoryRouter initialEntries={[ route ]}>
            <I18nextProvider i18n={i18nForTest}>
                {component}
            </I18nextProvider>
        </MemoryRouter>

    )
}
