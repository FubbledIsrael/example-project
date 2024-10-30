import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authService from '../../serviceApi/authApi';
import statusUtility from '../../../utilities/status.utility';
import { toast } from 'react-toastify';
import cookies from '../../cookies.service';

const key = 'auth';
const tokenKey = import.meta.env.VITE_TOKEN_SESSION;
const dataInit = {
    data: {},
    logged: false,
    status: statusUtility.StatusAPI.IDLE,
    token: Boolean(cookies.get(tokenKey))
};

export const login = createAsyncThunk(
    `${key}/login`,
    async (data, thunkAPI) => {
        try {
            return await authService.login(data);
        } catch (error) {
            const message = ((error.response && error.response.data && error.response.data.message) || error.message || error.toString());
            return thunkAPI.rejectWithValue(message);
        }
    }
)

export const authentication = createAsyncThunk(
    `${key}/authentication`,
    async (thunkAPI) => {
        try {
            return await authService.authentication();
        } catch (error) {
            const message = ((error.response && error.response.data && error.response.data.message) || error.message || error.toString());
            return thunkAPI.rejectWithValue(message);
        }
    }
)

export const authSlice = createSlice({
    name: key,
    initialState: dataInit,
    reducers: {
        logout: (state) => {
            cookies.clear(tokenKey);

            state.data = {};
            state.logged = false;
            state.token = false;
            state.status = statusUtility.StatusAPI.IDLE;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = statusUtility.StatusAPI.PENDING;
            })
            .addCase(login.rejected, (state, action) => {
                const { message } = action.payload;

                state.logged = false;
                state.data = {};
                state.status = statusUtility.StatusAPI.FAILED;

                toast.error(message);
            })
            .addCase(login.fulfilled, (state, action) => {
                const { data, code, message } = action.payload;
                state.logged = Boolean(code === statusUtility.StatusCode.OK);
                state.data = { ...data };
                state.status = statusUtility.StatusAPI.SUCCESSED;

                toast(message, {
                    type: (code === statusUtility.StatusCode.OK) ? 'success' : 'warning'
                })
            })
            .addCase(authentication.pending, (state) => {
                state.status = statusUtility.StatusAPI.PENDING;
            })
            .addCase(authentication.rejected, (state) => {
                const { message } = action.payload;
                state.data = {};
                state.logged = false;
                state.status = statusUtility.StatusAPI.FAILED;

                toast.error(message);
            })
            .addCase(authentication.fulfilled, (state, action) => {
                const { data, code, message } = action.payload;
                state.data = { ...data };
                state.logged = Boolean(code === statusUtility.StatusCode.OK);
                state.status = statusUtility.StatusAPI.SUCCESSED;

                toast(message, {
                    type: (code === statusUtility.StatusCode.OK) ? 'success' : 'warning'
                })
            })
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;