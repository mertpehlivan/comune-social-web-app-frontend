import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Container, ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './auth/AuthProvider';
const colors = {
  primary: '#EE6C4D',
  secondary: '#FFFFFF',
  error: '#f44336',
  warning: '#ff9800',
  info: '#2196f3',
  success: '#4caf50',
};
const theme = createTheme({
  typography: {
    fontFamily: [
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  
  palette: {
    
    primary: {
      main: '#EE6C4D',
    },
    secondary: {
      main: '#FFFFFF',
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#ff9800',
    },
    info: {
      main: '#2196f3',
    },
    success: {
      main: '#4caf50',
    },
    background:{
     
      default:'#FFFFFF'
    }
   
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <ThemeProvider theme={theme}>
    
      <BrowserRouter>
        <AuthProvider />
      </BrowserRouter>
 
  </ThemeProvider>

);
