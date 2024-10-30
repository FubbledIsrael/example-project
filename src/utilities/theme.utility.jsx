import { createTheme } from '@mui/material/styles';

const light = createTheme({
    palette: {
        common: {
            black: '#000',
            white: '#fff',
        },
        primary: {
            main: '#0C66E4',
            contrastText: '#fff'
        },
        secondary: {
            main: '#edede9',
            contrastText: '#000'
        },
        error: {
            main: '#f44336',
            contrastText: '#fff',
        },
        warning: {
            main: '#ffa726',
            contrastText: '#000',
        },
        info: {
            main: '#4fc3f7',
            contrastText: '#fff',
        },
        success: {
            main: '#66bb6a',
            contrastText: '#fff',
        },
        text: {
            primary: '#333',
            secondary: '#666',
            hint: '#999',
            disabled: 'rgba(0, 0, 0, 0.38)'
        },
        background: {
            default: '#fff',
            paper: '#fff'
        },
    },
    shape: {
        borderRadius: 4,
    },
});

const themeUtility = {
    light
}

export default themeUtility;