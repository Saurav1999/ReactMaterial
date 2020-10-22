import React from 'react';

import {  ThemeProvider } from '@material-ui/core/styles';
import Header from '../components/ui/Header';
import theme from './ui/Theme';
import Card from './ui/Card';
import Footer from './ui/Footer';


function App() {
  return (
    <ThemeProvider theme={theme}>
    <Header/>
    
    <Card/>
    <Card/>
    <Card/>
    
    <Footer/>

    </ThemeProvider>
  );
}

export default App;
