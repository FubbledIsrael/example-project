import React from 'react';
import { MoreInfoTable, Table } from '../../../components/table';
import { routeUtility, phoneUtility } from '../../../utilities';

const path = '/' + routeUtility.Private.USER.SUB.LOG;

const optionSort = {
    field: 'username', sort: 'desc'
};

const columns = [
    {
        field: 'Informacion',
        headerName: '',
        type: 'actions',
        width: 40,
        renderCell: (params) => <MoreInfoTable id={params.id} path={path} />
    },
    {
        field: 'fullName',
        headerName: 'Nombre',
        minWidth: 260,
        valueGetter: (_value, row) => `${row?.name} ${row?.lastname}` || 'Sin Registro',
    },
    {
        field: 'place_residence',
        headerName: 'Lugar de Residencia',
        minWidth: 260,
        flex: 1,
        sortable: false
    },
    {
        field: 'phone',
        headerName: 'Telefono',
        minWidth: 200,
        flex: 1,
        sortable: false,
        valueGetter: (value) => phoneUtility.formatPhoneNumber(value) || 'Sin Registro',
    },
    {
        field: 'email',
        headerName: 'Correo Electronico',
        minWidth: 260,
        flex: 1,
        sortable: false

    },
    {
        field: 'occupation',
        headerName: 'Ocupacion',
        minWidth: 240,
        filterable: false,
        sortable: false,
    },
    {
        field: 'company_name',
        headerName: 'Compañia',
        minWidth: 240,
        filterable: false,
        sortable: false,
    }
];

export const RecordTable = ({ loading, data }) => {
    return (
        <Table rows={data} loading={loading} columns={columns} optionSort={optionSort} disableExport={false} path={path} />
    );
}
