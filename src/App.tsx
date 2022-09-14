import React, { useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { CssBaseline, createTheme, ThemeProvider } from '@mui/material';

import SplashScreen from './screens/SplashScreen';
import Home from './screens/Home';

import { color } from './constants';

const theme = createTheme({
  palette: {
    primary: {
      main: color.primary,
    },
    background: {
      default: color.background,
    },
  },
});

const App = () => {
  const [user, setUser] = useState({});

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {/* <AppContext.Provider value={{
            flights,
            setFlights,
            hotels,
            setHotels,
            favorites,
            setFavorites,
            currentDestination,
          }}
          > */}
        <CssBaseline />
        <Routes>
          <Route path="/profile" element={<SplashScreen />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<SplashScreen />} />
        </Routes>
        {/* </AppContext.Provider> */}
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
