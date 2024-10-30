import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Error_404, Error_500 } from './pages/error';
import { useDispatch, useSelector } from 'react-redux';
import { authentication } from './services/redux/states/auth';
import { LogUser, DataUser, SignIn } from './pages/user';
import { ProgressCircular } from './components/alert';
import { Auth } from './services/guard.service';
import { Template } from './components/layout';
import { routeUtility, statusUtility } from './utilities';

export const Routing = () => {
    const authState = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (authState.token) {
            dispatch(authentication())
        }
    }, []);

    return (
        <BrowserRouter>
            {(authState.logged) ?
                <Routes>
                    <Route path='*' element={<Template> {(authState.status === statusUtility.StatusAPI.PENDING) ? <ProgressCircular /> : <Error_404 />}</Template>} />
                    <Route path={routeUtility.Public.ERROR_PATH} element={<Template> <Error_500 /></Template>} />

                    <Route path='*' element={<Template> {(authState.status === statusUtility.StatusAPI.PENDING) ? <ProgressCircular /> : <Error_404 />}</Template>} />
                    <Route path={routeUtility.Public.ERROR_PATH} element={<Template> <Error_500 /></Template>} />

                    <Route element={<Auth tabs={0} />}>
                        <Route element={<LogUser />} path={routeUtility.Public.HOME} />

                        <Route element={<LogUser />} path={`${routeUtility.Private.USER.SUB.LOG}`} />
                        <Route element={<DataUser />} path={`${routeUtility.Private.USER.SUB.LOG}/:id`} />

                        <Route element={<LogRequestUser />} path={`${routeUtility.Private.USER.SUB.REQUEST}`} />
                        <Route element={<DataRequestUser />} path={`${routeUtility.Private.USER.SUB.REQUEST}/:id`} />
                    </Route>

                    <Route element={<Auth />}>
                        <Route element={<LogGranLogia />} path={routeUtility.Private.GRAN_LOGIA.SUB.LOG} />
                    </Route>
                </Routes> :
                <Routes>
                    <Route path='*' element={<Template> <Error_404 /></Template>} />
                    <Route path={routeUtility.Public.ERROR_PATH} element={<Template> <Error_500 /></Template>} />
                    <Route path={routeUtility.Public.HOME} element={<Template > <SignIn /> </Template>} />
                </Routes>
            }
        </BrowserRouter>
    )
}
