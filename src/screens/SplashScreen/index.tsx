import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';

const SplashScreen = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Box
      className="test"
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography>Splash Screen</Typography>
      <Button onClick={() => loginWithRedirect()} variant="contained">
        Login
      </Button>
    </Box>
  );
};

export default SplashScreen;
