import React from 'react';
import { Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

export const DialogMessage = ({ title, message, openDialog, handlerClose, children }) => {
    return (
        <Dialog open={openDialog} onClose={handlerClose}>
            <DialogTitle textAlign='center'> {title} </DialogTitle>

            <DialogContent>
                {message && <DialogContentText> {message} </DialogContentText>}
                {children}
            </DialogContent>
        </Dialog>
    );
}
