import { Outlet, useParams, useLocation } from 'react-router-dom';
import { TabsUser } from '../components/tabs';
import { Template } from '../components/layout/Template';

const pageTabs = {
    0: <TabsUser />
}

export const Auth = ({ tabs }) => {
    const params = useParams();
    const { pathname } = useLocation();

    return <Template> {(Object.values(params).length === 0 && pathname.indexOf('create') === -1) && pageTabs[tabs]} <Outlet /> </Template>

}