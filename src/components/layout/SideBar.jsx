import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, ListItem } from '@mui/material';
import { routeUtility } from '../../utilities';
import { Cottage as CottageIcon, Person as PersonIcon } from '@mui/icons-material';

const optionsMenu = [
    { title: 'Usuarios', icon: <PersonIcon />, route: routeUtility.Public.HOME },
    { title: 'Gran Logias', icon: <CottageIcon />, route: `/${routeUtility.Private.GRAN_LOGIA.SUB.LOG}` }];

export const SideBar = ({ openDrawer, toggleDrawer }) => {
    const navigate = useNavigate();

    return (
        <Drawer open={openDrawer} onClose={toggleDrawer(false)} onClick={toggleDrawer(false)} sx={{ width: 250, flexShrink: 0, [`& .MuiDrawer-paper`]: { width: 250, boxSizing: 'border-box' }, }}>
            <Toolbar />
            <List component="nav" >
                {
                    optionsMenu.map((text, index) => {
                        return <ListItem disablePadding key={index}>
                            <ListItemButton onClick={() => navigate(text.route)}>
                                <ListItemIcon> {text.icon} </ListItemIcon>
                                <ListItemText primary={text.title} />
                            </ListItemButton>
                        </ListItem>;
                    })
                }
            </List>
        </Drawer>
    );
}
