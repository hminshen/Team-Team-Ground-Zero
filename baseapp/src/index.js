import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#D9EDF7',
    },
    secondary: {
      main: '#FCDB96', 
    },
    info: {
      main: '#033F63',
    },
    background: {
      //default: '#fffef2',
      default: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: ['Roboto'].join(','),
    h2: {
      fontWeight: 'bold',
      fontSize: '3.3rem',
    },
    h3: {
      fontWeight: 'bold',
      fontSize: '2.8rem',
      marginBottom: 15,
    },
    h4: {
      fontWeight: 'bold',
      fontSize: '1.5rem',
      marginBottom: 3,
      marginTop: 3,
    },
    h5: {
      fontWeight: 'semibold',
      fontSize: '1.2rem',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);