import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { methodService } from '../../serviceApi';
import { statusUtility } from '../../../utilities';
import { toast } from 'react-toastify';

const key = 'user';
const url = `${import.meta.env.VITE_URL_API}user`;
const dataInit = {
    data: [],
    status: statusUtility.StatusAPI.IDLE,
    created: false,
    updated: false
};

export const get = createAsyncThunk(
    `${key}/get`,
    async (id, thunkAPI) => {
        try {
            return await methodService.get(url, id);
        } catch (error) {
            const message = ((error.response && error.response.data && error.response.data.message) || error.message || error.toString());
            return thunkAPI.rejectWithValue(message);
        }
    }
)

export const all = createAsyncThunk(
    `${key}/all`,
    async (thunkAPI) => {
        try {
            return await methodService.all(url);
        } catch (error) {
            const message = ((error.response && error.response.data && error.response.data.message) || error.message || error.toString());
            return thunkAPI.rejectWithValue(message);
        }
    }
)

export const create = createAsyncThunk(
    `${key}/create`,
    async (data, thunkAPI) => {
        try {
            return await methodService.create(url, data);
        } catch (error) {
            const message = ((error.response && error.response.data && error.response.data.message) || error.message || error.toString());
            return thunkAPI.rejectWithValue(message);
        }
    }
)

export const update = createAsyncThunk(
    `${key}/update`,
    async (data, thunkAPI) => {
        try {
            return await methodService.update(url, 'PUT', data.id, data);
        } catch (error) {
            const message = ((error.response && error.response.data && error.response.data.message) || error.message || error.toString());
            return thunkAPI.rejectWithValue(message);
        }
    }
)

export const updateStatus = createAsyncThunk(
    `${key}/updateStatus`,
    async (data, thunkAPI) => {
        try {
            return await methodService.update(url, 'PATCH', data.id, data);
        } catch (error) {
            const message = ((error.response && error.response.data && error.response.data.message) || error.message || error.toString());
            return thunkAPI.rejectWithValue(message);
        }
    }
)

export const remove = createAsyncThunk(
    `${key}/remove`,
    async (id, thunkAPI) => {
        try {
            return await methodService.remove(url, id);
        } catch (error) {
            const message = ((error.response && error.response.data && error.response.data.message) || error.message || error.toString());
            return thunkAPI.rejectWithValue(message);
        }
    }
)

export const userSlice = createSlice({
    name: key,
    initialState: dataInit,
    extraReducers: (builder) => {
        builder
            .addCase(get.pending, (state) => {
                state.status = statusUtility.StatusAPI.PENDING;
            })
            .addCase(get.rejected, (state, action) => {
                const { message } = action.payload

                console.error(action.payload);
                toast.error(message);
                state.status = statusUtility.StatusAPI.FAILED;
            })
            .addCase(get.fulfilled, (state) => {
                state.status = statusUtility.StatusAPI.SUCCESSED;
            })
            .addCase(all.pending, (state) => {
                state.status = statusUtility.StatusAPI.PENDING;
            })
            .addCase(all.rejected, (state, action) => {
                const { message } = action.payload

                console.error(action.payload);
                toast.error(message);
                state.status = statusUtility.StatusAPI.FAILED;
            })
            .addCase(all.fulfilled, (state, action) => {
                const { data } = action.payload;
                state.data = [...data];
                state.status = statusUtility.StatusAPI.SUCCESSED;
            })
            .addCase(create.pending, (state) => {
                state.status = statusUtility.StatusAPI.PENDING;
            })
            .addCase(create.rejected, (state, action) => {
                const { message } = action.payload

                console.error(action.payload);
                toast.error(message);
                state.status = statusUtility.StatusAPI.FAILED;
            })
            .addCase(create.fulfilled, (state, action) => {
                const { code, data, message } = action.payload;

                state.created = Boolean(code === statusUtility.StatusCode.CREATED)
                if (code === statusUtility.StatusCode.CREATED) {
                    state.data.push(data)
                }

                toast(message, {
                    type: (code === statusUtility.StatusCode.CREATED) ? 'success' : 'error'
                });
                state.status = statusUtility.StatusAPI.SUCCESSED;
            })
            .addCase(update.pending, (state) => {
                state.status = statusUtility.StatusAPI.PENDING;
            })
            .addCase(update.rejected, (state, action) => {
                const { message } = action.payload

                console.error(action.payload);
                toast.error(message);
                state.status = statusUtility.StatusAPI.FAILED;
            })
            .addCase(update.fulfilled, (state, action) => {
                const { code, data, message } = action.payload;

                state.updated = Boolean(code === statusUtility.StatusCode.CREATED)
                if (code === statusUtility.StatusCode.CREATED) {
                    const indexData = state.data.findIndex((item) => item?.id === data?.id);
                    if (indexData !== -1) {
                        state.data[indexData] = data;
                    }
                }

                toast(message, {
                    type: (code === statusUtility.StatusCode.CREATED) ? 'success' : 'error'
                });
                state.status = statusUtility.StatusAPI.SUCCESSED;
            })
            .addCase(updateStatus.pending, (state) => {
                state.status = statusUtility.StatusAPI.PENDING;
            })
            .addCase(updateStatus.rejected, (state, action) => {
                const { message } = action.payload

                console.error(action.payload);
                toast.error(message);
                state.status = statusUtility.StatusAPI.FAILED;
            })
            .addCase(updateStatus.fulfilled, (state, action) => {
                const { data, message, code } = action.payload;

                if (code === statusUtility.StatusCode.CREATED) {
                    const indexData = state.data.findIndex((item) => item?.id === data?.id);
                    if (indexData !== -1) {
                        state.data[indexData] = data;
                    }
                }

                toast(message, {
                    type: (code === statusUtility.StatusCode.CREATED) ? 'success' : 'error'
                });

                state.status = statusUtility.StatusAPI.SUCCESSED;
            })
            .addCase(remove.pending, (state) => {
                state.status = statusUtility.StatusAPI.PENDING;
            })
            .addCase(remove.rejected, (state, action) => {
                const { message } = action.payload

                console.error(action.payload);
                toast.error(message);
                state.status = statusUtility.StatusAPI.FAILED;
            })
            .addCase(remove.fulfilled, (state, action) => {
                const { index, message, code } = action.payload;

                if (code === statusUtility.StatusCode.CREATED) {
                    const indexData = state.data.findIndex((item) => item?.id === index);

                    state.data[indexData].status.id = statusUtility.StatusUser.DELETED;
                    state.data[indexData].status.name = 'Eliminado';
                }

                toast(message, {
                    type: (code === statusUtility.StatusCode.CREATED) ? 'success' : 'error'
                });

                state.status = statusUtility.StatusAPI.SUCCESSED;
            })
    },
});

export default userSlice.reducer;