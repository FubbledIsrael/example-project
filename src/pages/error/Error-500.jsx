import React from 'react';
import { Grid2, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { routeUtility } from '../../utilities';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';

export const Error_500 = () => {
  const navigate = useNavigate();

  const backToHome = () => {
    navigate(routeUtility.Public.HOME);
  }

  return (
    <Grid2 container direction="column" justifyContent="center" alignItems="center">
      <Grid2 size={{ xs: 12, md: 3 }}>
        <Typography component="div" variant="h3" textAlign='center'> Error 500 </Typography>
        <Typography component="div" variant="h5" textAlign='center' mt={1}> Lo lamento, estamos teniendo problemas. </Typography>

        <Box textAlign='center' component='div' mt={4}>
          <Button onClick={backToHome} variant="contained" startIcon={<ArrowBackIcon />}> Regresar </Button>
        </Box>
      </Grid2>
    </Grid2>
  );
}
