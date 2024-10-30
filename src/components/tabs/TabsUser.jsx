import React, { useEffect, useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { routeUtility } from '../../utilities';

export const TabsUser = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [option, setOption] = useState(0);
    const routeControl = {
        0: `/${routeUtility.Private.USER.SUB.LOG}`,
        1: `/${routeUtility.Private.USER.SUB.REQUEST}`,
    };

    useEffect(() => {
        const value = Object.values(routeControl).indexOf(location.pathname);
        const index = (value != -1) ? value : 0;
        setOption(index);
    }, []);

    const handleChange = (_event, newValue) => {
        setOption(newValue);
        navigate(routeControl[newValue]);
    }

    return (
        <Box sx={{ width: '100%', mb: 2 }}>
            <Tabs value={option} onChange={handleChange} textColor="secondary" indicatorColor="secondary" variant="scrollable" scrollButtons="auto">
                <Tab value={0} label="Usuarios" />
                <Tab value={1} label="Solicitudes" />
            </Tabs>
        </Box>
    );
}
