import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Search as SearchIcon } from '@mui/icons-material';

export const MoreInfoTable = ({ id, path }) => {
    const navigate = useNavigate();

    const handlerData = (id) => {
        navigate(`${path}/${id}`);
    }

    return (
        <Tooltip title="Datos">
            <IconButton onClick={() => handlerData(id)}>
                <SearchIcon color='primary' />
            </IconButton>
        </Tooltip>
    )
}
