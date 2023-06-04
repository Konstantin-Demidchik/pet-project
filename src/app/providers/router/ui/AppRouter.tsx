import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { routeConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = (): JSX.Element => {
    return (
        <Suspense fallback={''}>
            <Routes>
                {Object.values(routeConfig).map(({ path, element }) => (
                    <Route key={path} path={path} element={(<div className="page-wrapper">{element}</div>)} />
                ))}
            </Routes>
        </Suspense>
    )
}

export default AppRouter;
