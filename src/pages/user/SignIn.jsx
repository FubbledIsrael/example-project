import React from 'react';
import { LoginForm } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../services/redux/states/auth';
import { Grid2 } from '@mui/material';
import { statusUtility } from '../../utilities';

export const SignIn = () => {
    const dispatch = useDispatch();
    const authState = useSelector((state) => state.auth);

    const OnHandler = (data) => {
        dispatch(login(data));
    }

    return (
        <Grid2 container justifyContent='center' mt={6}>
            <Grid2 size={{ xs: 12, md: 3, lg: 2 }}>
                <LoginForm onSubmit={OnHandler} loading={Boolean(authState.status === statusUtility.StatusAPI.PENDING)} />
            </Grid2>
        </Grid2>
    );
} 