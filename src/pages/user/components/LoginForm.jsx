import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, TextField, FormControl, InputAdornment, OutlinedInput, InputLabel, IconButton, FormControlLabel, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { VisibilityOff, Visibility } from '@mui/icons-material';

export const LoginForm = ({ onSubmit, loading }) => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box component='form' onSubmit={handleSubmit(onSubmit)}>

      <TextField label="Usuario" variant="outlined" fullWidth type='text' autoComplete='on' sx={{ mt: 2, background: 'white' }}
        {...register('username', {
          required: { value: true, message: 'Campo requerido' }
        })}
        error={Boolean(errors.username?.type === 'required')}
        helperText={errors.username?.message} />

      <FormControl variant="outlined" fullWidth autoComplete='on' sx={{ mt: 2, background: 'white' }} error={Boolean(errors.password?.type === 'required')}>
        <InputLabel>Contraseña</InputLabel>
        <OutlinedInput label="Contraseña" type={showPassword ? 'text' : 'password'}
          {...register('password', { required: { value: true, message: 'Campo requerido' } })}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword(!showPassword)} edge="end"> {showPassword ? <VisibilityOff /> : <Visibility />} </IconButton>
            </InputAdornment>} />
      </FormControl>

      <FormControlLabel control={<Checkbox  {...register('remember')} />} label="Recuerdame" />

      <LoadingButton type='submit' mcolor='primary' variant="contained" fullWidth sx={{ mt: 2 }} loading={loading}> Ingresar </LoadingButton>
    </Box>
  );
}