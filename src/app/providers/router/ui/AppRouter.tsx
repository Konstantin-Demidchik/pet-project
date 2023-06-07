import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/page-loader';

const AppRouter = (): JSX.Element => {
    return (

        <Routes>
            {Object.values(routeConfig).map(({ path, element }) => (
                <Route key={path} path={path} element={(
                    <Suspense fallback={<PageLoader />}>
                        <div className="page-wrapper">{element}</div>
                    </Suspense>)}
                />
            ))}
        </Routes>
    )
}

export default AppRouter;
