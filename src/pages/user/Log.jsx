import React, { useEffect, useState } from 'react';
import { Grid2, Stack, TextField, MenuItem } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { all as allUser } from '../../services/redux/states/user';
import { statusUtility } from '../../utilities';
import { RecordTableUser } from './components';

export const Log = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const [categoryRequest, setCategoryRequest] = useState(parseInt(localStorage.getItem('user_status')) || statusUtility.StatusUser.ACTIVE);
  const [filterRequest, setFilterRequest] = useState([]);

  const filterData = (data) => (categoryRequest !== statusUtility.StatusUser.IDLE) ? data.filter((value) => value.status?.id === categoryRequest) : data;

  const onHandlerChangeStatus = (event) => {
    const { value } = event.target;

    localStorage.setItem('user_status', value);
    setCategoryRequest(value);
  }

  useEffect(() => {
    if (userState?.data?.length > 0) {
      const statusFilter = filterData(userState?.data);
      setFilterRequest([...statusFilter])
    }
  }, [categoryRequest]);

  useEffect(() => {
    dispatch(allUser()).then((e) => {
      const { data, code } = e.payload;

      if (code === statusUtility.StatusCode.OK && data.length > 0) {
        const statusFilter = filterData(data);
        setFilterRequest([...statusFilter]);
      }
    })
  }, []);

  return (
    <Grid2 container justifyContent='center'>
      <Grid2 size={{ xs: 12, md: 11 }}>
        <Stack direction={'row'} mb={2}>
          <TextField select value={categoryRequest} onChange={onHandlerChangeStatus} label="Categoria" style={{ background: 'white' }}>
            <MenuItem value={statusUtility.StatusUser.ACTIVE}>Activo</MenuItem>
            <MenuItem value={statusUtility.StatusUser.SUSPENDE}>Suspendido</MenuItem>
            <MenuItem value={statusUtility.StatusUser.ELIMINATE}>Eliminado</MenuItem>
            <MenuItem value={statusUtility.StatusUser.UPDATEDPASSWORD}>Actualizar contraseña</MenuItem>
            <MenuItem value={statusUtility.StatusUser.IDLE}>Todos</MenuItem>
          </TextField>
        </Stack>
        <RecordTableUser loading={Boolean(userState.status === statusUtility.StatusAPI.PENDING)} data={filterRequest} />
      </Grid2>
    </Grid2>
  )
}
