import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Box, TextField, Typography, Stack, Autocomplete } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useSelector } from 'react-redux';

export const Form = ({ data, onSubmit, button, loading }) => {
  const { register, control, setValue, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: data.name,
      lastname: data.lastname,
      email: data.email,
      phone: data.phone,
      information_contact: data?.information_contact,
      occupation: data.occupation,
      company_name: data.company_name
    }
  });
  const cityProvinceState = useSelector((state) => state.cityProvince);

  return (
    <Box component='form' autoComplete='off' onSubmit={handleSubmit(onSubmit)}>

      <Typography variant='h6' component="h6" align='center' color='success'>Verificar Datos</Typography>

      <Stack direction={{ sm: 'row', xs: 'column' }} spacing={2} pt={1}>
        <TextField label="Nombre" variant="outlined" autoComplete='first-name' type='text' fullWidth disabled
          {...register('name', {
            required: { value: true, message: 'Campo requerido' }
          })}
          error={Boolean(errors.name?.type === 'required')}
          helperText={errors.name?.message} />

        <TextField label="Apellido" variant="outlined" autoComplete='family-name' type='text' fullWidth disabled
          {...register('lastname', {
            required: { value: true, message: 'Campo requerido' }
          })}
          error={Boolean(errors.lastname?.type === 'required')}
          helperText={errors.lastname?.message} />
      </Stack>

      <TextField label="Telefono" variant="outlined" fullWidth type='tel' defaultValue={data?.phone} disabled sx={{ mt: 2 }}
        {...register('phone', {
          required: { value: true, message: 'Campo requerido' },
          minLength: { value: 10, message: 'Numero de Telefono invalido' }
        })}
        error={Boolean(errors.phone?.type === 'required' || errors.phone?.type === 'minLength')}
        helperText={errors.phone?.message} />

      <TextField label="Correo Electronico" variant="outlined" fullWidth type='text' autoComplete='email' sx={{ mt: 2 }} disabled
        {...register('email', {
          required: { value: true, message: 'Campo requerido' }
        })}
        error={Boolean(errors.email?.type === 'required')}
        helperText={errors.email?.message}
      />

      <Typography variant='h6' component="h6" mt={2} align='center'>Datos de Ocupación</Typography>

      <TextField label="Ocupacion" variant="outlined" fullWidth type='text' sx={{ mt: 2 }} disabled
        {...register('occupation', {
          required: { value: true, message: 'Campo requerido' }
        })}
        error={Boolean(errors.occupation?.type === 'required')}
        helperText={errors.occupation?.message}
      />

      <TextField label="Nombre de Empresa o Empleador" variant="outlined" fullWidth type='text' sx={{ mt: 2 }} disabled
        {...register('company_name', {
          required: { value: true, message: 'Campo requerido' }
        })}
        error={Boolean(errors.company_name?.type === 'required')}
        helperText={errors.company_name?.message}
      />

      <Controller
        control={control}
        name="place_residence"
        rules={{ required: { value: true, message: 'Campo requerido' } }}
        render={({ field: { onChange }, fieldState: { error } }) => (
          <Autocomplete
            freeSolo
            fullWidth
            sx={{ mt: 2 }}
            onChange={(_e, newValue) => {
              const { id_city, id_province, label } = newValue;
              setValue('city', id_city);
              setValue('province', id_province);
              onChange(label)
            }}
            options={cityProvinceState.data?.map((item) => ({ id: item.id, id_city: item?.city?.id, id_province: item?.province?.id, label: `${item.city.name}, ${item.province.name}` }))}
            renderInput={(params) => <TextField {...params} label="Lugar de Residencia"
              error={Boolean(error?.type === 'required')}
              helperText={error?.message} />}
          />
        )}
      />

      <LoadingButton type='submit' color='success' variant="contained" fullWidth sx={{ mt: 2 }} disabled={button} loading={loading}> Agregar Usuario </LoadingButton>
    </Box>
  )
}
