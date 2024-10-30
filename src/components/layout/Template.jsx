import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Box } from '@mui/material';

export const Template = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1, paddingX: 2, marginTop: 1 }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}