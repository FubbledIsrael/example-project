import { configureStore } from '@reduxjs/toolkit';
import {
    authSliceReduce,
    userSliceReduce,
} from './states';

export const store = configureStore({
    reducer: {
        auth: authSliceReduce,
        user: userSliceReduce,
    }
});
