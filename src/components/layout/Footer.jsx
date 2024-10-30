import React from 'react';
import { Box, Divider, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <Box component='footer' sx={{ mt: 'auto', p: 1 }}>
      <Divider sx={{ mb: 1 }} />
      <Typography variant="body2" component='div' align='center'> {import.meta.env.VITE_NAME_APP} {new Date().getFullYear()}. </Typography>
    </Box>
  );
}
