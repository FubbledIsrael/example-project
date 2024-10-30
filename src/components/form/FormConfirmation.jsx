import React from 'react';
import { Stack, Button } from '@mui/material';

export const FormConfirmation = ({ onClose, handleChange }) => {
    return (
        <Stack direction={'row'} justifyContent={'space-between'}>
            <Button onClick={onClose}>Cancelar</Button>
            <Button onClick={handleChange}>Aceptar</Button>
        </Stack>
    );
}