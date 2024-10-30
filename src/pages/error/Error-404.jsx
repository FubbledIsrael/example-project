import React from 'react';
import { Grid2, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { routeUtility } from '../../utilities';
import { useSelector } from 'react-redux';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';

export const Error_404 = () => {
  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);

  const backTo = () => {
    if (authState.logged) {
      navigate(-1);
    } else {
      navigate(routeUtility.Public.HOME);
    }
  }

  return (
    <Grid2 container direction="column" justifyContent="center" alignItems="center">
      <Grid2 size={{ xs: 12, md: 3 }}>
        <Typography component="div" variant="h3" textAlign='center'> Error 404 </Typography>
        <Typography component="div" variant="h4" textAlign='center' mt={1}> Ups! </Typography>
        <Typography component="div" variant="h5" textAlign='center' mt={1}> No podemos encontrar esa pagina. </Typography>

        <Box textAlign='center' component='div' mt={4}>
          <Button onClick={backTo} variant="contained" startIcon={<ArrowBackIcon />}> Regresar </Button>
        </Box>
      </Grid2>
    </Grid2>
  );
}
