import { Suspense, memo, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';

import { AppRouteProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/page-loader';
import {RequireAuth} from './RequireAuth';

const AppRouter = (): JSX.Element => {

    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                <div className="page-wrapper">{route.element}</div>
            </Suspense>);

        return <Route 
            key={route.path} 
            path={route.path} 
            element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element} 
        />
    }, []);

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    )
}

export default memo(AppRouter);
