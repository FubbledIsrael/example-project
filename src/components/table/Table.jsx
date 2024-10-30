import React from 'react';
import { LinearProgress } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

export const Table = ({ rows, loading, columns, optionSort, disableExport = true }) => {

    return (
        <DataGrid
            autoHeight={Boolean(rows.length < 10)}
            density='standard'
            rows={rows}
            loading={loading}
            columns={columns}
            rowSelection={false}
            initialState={{ sorting: { sortModel: [optionSort] } }}
            slots={{
                toolbar: GridToolbar,
                loadingOverlay: LinearProgress,
            }}
            slotProps={{
                toolbar: {
                    showQuickFilter: true,
                    printOptions: {
                        disableToolbarButton: disableExport
                    },
                    csvOptions: {
                        disableToolbarButton: disableExport
                    }
                }
            }}
            sx={{
                pt: 1,
                boxShadow: 2,
                border: 1,
                borderColor: 'primary.light',
                '& .MuiDataGrid-cell:hover': {
                    color: 'primary.main',
                },
            }}
            getRowId={(row) => row.id}
        />
    )
}
