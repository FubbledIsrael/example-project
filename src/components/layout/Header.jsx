import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Divider, Tooltip, MenuItem, ListItemIcon } from '@mui/material';
import { SideBar } from './SideBar';
import { DialogMessage } from '../alert';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../services/redux/states/auth';
import { OptionMenu } from '../select';
import { FormConfirmation } from '../form';
import { routeUtility } from '../../utilities';
import { Menu as MenuIcon, Person as PersonIcon, Logout as LogoutIcon } from '@mui/icons-material';
import logo2 from '../../assets/react.svg';

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpenDrawer(open);
  }

  const handlerLogout = () => {
    dispatch(logout());
    navigate(routeUtility.Public.HOME);
  }

  return (
    <AppBar position="sticky" open={openDrawer} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        {authState.logged && <Tooltip title="Menu"><IconButton size="large" edge="start" color="inherit" aria-label="open drawer" onClick={toggleDrawer(!openDrawer)}> <MenuIcon /> </IconButton></Tooltip>}

        <IconButton size="large" onClick={() => navigate(routeUtility.Public.HOME)}>
          <img src={logo2} alt="Logo" style={{ width: 75, height: 45 }} />
        </IconButton>
        <Typography variant="h6" >{import.meta.env.VITE_NAME_APP}</Typography>

        {authState.logged &&
          <Box sx={{ flexGrow: 1, textAlign: 'end' }}>
            <OptionMenu colorIcon={'white'}>
              <MenuItem>
                <ListItemIcon> <PersonIcon fontSize="small" /> </ListItemIcon>
                <Typography >{authState.data?.username}</Typography>
              </MenuItem>
              <Divider />
              <MenuItem onClick={() => setOpenDialog(true)}>
                <ListItemIcon> <LogoutIcon fontSize="small" /> </ListItemIcon>
                <Typography >Cerrar Sesion</Typography>
              </MenuItem>
            </OptionMenu>
          </Box>
        }
      </Toolbar>

      <DialogMessage title={'¿Quieres Cerrar Sesion?'} openDialog={openDialog} handlerClose={() => setOpenDialog(false)}>
        <FormConfirmation onClose={() => setOpenDialog(false)} handleChange={handlerLogout} />
      </DialogMessage>

      {authState.logged && <SideBar rol={authState.data?.rol} openDrawer={openDrawer} toggleDrawer={toggleDrawer} />}
    </AppBar>
  );
}
