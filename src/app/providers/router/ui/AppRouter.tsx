import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData/getUserAuthData';
import { Suspense, memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/page-loader';

const AppRouter = (): JSX.Element => {
    const isAuth = useSelector(getUserAuthData);   
    
    const routes = useMemo(() => Object.values(routeConfig).filter(({ authOnly } ) => {
        if(authOnly && !isAuth) return false

        return true;
    }), [isAuth]);
    
    return (
        <Routes>
            {routes.map(({ path, element }) => (
                <Route key={path} path={path} element={(
                    <Suspense fallback={<PageLoader />}>
                        <div className="page-wrapper">{element}</div>
                    </Suspense>)}
                />
            ))}
        </Routes>
    )
}

export default memo(AppRouter);
