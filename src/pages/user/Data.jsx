import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Grid2, Typography, Card, CardContent, Button, Stack } from '@mui/material';
import { useDispatch } from 'react-redux';
import { ProgressCircular } from '../../components/alert';
import { Error_404 } from '../error';
import { phoneUtility } from '../../utilities';
import { get as getUser } from '../../services/redux/states/user';
import { WhatsApp as WhatsAppIcon } from '@mui/icons-material';
import moment from 'moment/moment';

export const Data = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [current, setCurrent] = useState({ data: {}, loading: true, error: false });

    useEffect(() => {
        dispatch(getUser(id)).then(e => {
            const { data } = e.payload
            setCurrent({ data: { ...data }, loading: false, error: !Boolean(data) })
        })
    }, []);

    return (
        <Box>
            {current.loading ?
                <ProgressCircular /> :
                (!current.error) ?
                    <Grid2 container justifyContent='space-around' mt={2}>
                        <Grid2 size={{ xs: 12, md: 6, lg: 5 }}>
                            <Card>
                                <CardContent>
                                    <Stack justifyContent={'space-between'} mt={1} spacing={3} p={1}>
                                        {current.data.created_at &&
                                            <Box>
                                                <Typography variant="subtitle1" component="div" color='primary' gutterBottom> Creado</Typography>
                                                <Typography sx={{ fontSize: 15 }} color='gray' gutterBottom> {moment(current.data.created_at).format('dddd, DD MMMM YY HH:mm A')} </Typography>
                                            </Box>
                                        }
                                        {current.data.updated_at &&
                                            <Box>
                                                <Typography variant="subtitle1" component="div" color='primary' gutterBottom> Actualizado</Typography>
                                                <Typography sx={{ fontSize: 15 }} color='gray' gutterBottom> {moment(current.data.updated_at).format('dddd, DD MMMM YY HH:mm A')} </Typography>
                                            </Box>
                                        }

                                        <Box>
                                            <Typography variant="subtitle1" color='primary' component="div">Nombre Completo </Typography>
                                            <Typography variant="body" color='gray' component="div"> {`${current.data.name} ${current.data.lastname}`} </Typography>
                                            <Stack direction={'row'} >
                                                <Typography variant='body' color='gray' alignSelf={'center'}> {phoneUtility.formatPhoneNumber(current.data.phone)} </Typography>
                                                <Button variant='text' color='success' target='_blank' href={`https://wa.me/+${current.data.phone}`} size='large' startIcon={<WhatsAppIcon color='success' />}></Button>
                                            </Stack>
                                            <Typography variant="body" component="div" color='gray' gutterBottom > {current.data.email} </Typography>
                                        </Box>

                                        <Box>
                                            <Typography variant="subtitle1" color='primary' component="div">Ocupacion</Typography>
                                            <Typography variant="body" component="div" color='gray'> {current.data.occupation} </Typography>
                                            <Typography variant="subtitle1" color='primary' component="div">Compañia</Typography>
                                            <Typography variant="body" component="div" color='gray'> {current.data.company_name} </Typography>
                                            <Typography variant="subtitle1" color='primary' component="div">Lugar de Residencia</Typography>
                                            <Typography variant="body" component="div" color='gray'> {current.data.place_residence} </Typography>
                                        </Box>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid2>
                    </Grid2> :
                    <Error_404 />
            }
        </Box>
    )
}
