import { Box } from '@mui/material';
import React from 'react';
import backgroundImage from '../../images/polygonal-3d-smartphone-gps-navigation-location-app-travelling-concept-phone-navigator-pin-dark-blue-background-smart-technology-digital-illustration.jpg';
import { Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
 
 

export default function Home() {

  const navigate = useNavigate ()

  const redirectToLogin = () => {
    navigate ("/login")
  }
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${backgroundImage}) `,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center', 
      }}
    >
      <Box
        sx={{
          width: "380px",
          display: 'flex', 
          justifyContent: 'center', 
          flexDirection: "column"
        }}
      >
        <Typography variant="body2" sx={{ fontSize: '40px', color: "white", marginBottom: "150px" }}>
          Welcome to your personalized agenda, PhoneBook!
        </Typography>
        <Button onClick={redirectToLogin} sx={{
         
          fontSize:"25px",
          color:"#005572",
       
          backgroundColor: "rgba(155, 255, 255, 0.5)",
          '&:hover': {
            color: '#00B4FF',
            fontSize: '22px',
            transform: 'scale(1.1)',
            transition: 'transform 0.9s ease',}
          
        }}>Get Started &gt; </Button>
      </Box>
    </Box>
  );
}
