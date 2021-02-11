import React from 'react';
import Button from '@material-ui/core/Button'

import {ThemeProvider} from '@material-ui/core/styles'
import theme from './themeConfig'
import NavBar from './Components/NavBar';
import Lista from './Components/Lista';
import HiddenComp from './Components/Hidden';
import Contenedor from './Components/Contenedor';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Contenedor />
    </ThemeProvider>
  );
}

export default App;
