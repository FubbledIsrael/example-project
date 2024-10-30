import React, { useState } from 'react';
import { Tooltip, Menu, IconButton, Stack } from '@mui/material';
import { Settings as SettingsIcon } from '@mui/icons-material';

export const OptionMenu = ({ colorIcon, children }) => {
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    }

    return (
        <Stack direction='row' justifyContent='end'>
            <Tooltip title="Opciones">
                <IconButton size="large" onClick={handleOpenUserMenu}>
                    <SettingsIcon sx={{ fontSize: 30, color: colorIcon }} />
                </IconButton>
            </Tooltip>
            <Menu anchorEl={anchorElUser} open={Boolean(anchorElUser)} onClose={() => setAnchorElUser(null)}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        '& .MuiAvatar-root': { width: 32, height: 32, ml: -0.5, mr: 2 },
                        '&:before': { display: 'block', position: 'absolute', top: 0, right: 14, width: 10, height: 10, bgcolor: 'background.paper', transform: 'translateY(-50%) rotate(45deg)', zIndex: 0 },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                {children}
            </Menu>
        </Stack>
    )
}
