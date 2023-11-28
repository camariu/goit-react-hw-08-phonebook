import React, { useEffect } from 'react';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { TextField, Button, Typography, Box } from '@mui/material';
import { Checkbox } from '@mui/material';
import Link from '@mui/material/Link';
import backgroundImage from '../../images/polygonal-3d-smartphone-gps-navigation-location-app-travelling-concept-phone-navigator-pin-dark-blue-background-smart-technology-digital-illustration.jpg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'components/redux/operations';
import { useNavigate } from 'react-router-dom';
import { selectIsAuthentificated } from '../../components/redux/selectors.js';
import { useSelector } from 'react-redux';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuthentificated);

  const handleChangeInput = event => {
    const { name, value } = event.target;

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(login({ email: email, password: password }));
   
  };

  useEffect (()=> {
    if(isAuth) navigate("/phonebook")
  },[isAuth, navigate])

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
     
        <Box
          sx={{
            margin: 'auto',
            width: '100%',
            maxWidth: '300px',
            padding: '25px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginTop: '100px',
          }}
        >
          <Box
            sx={{
              width: '300px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: '35px',
                color: '#fff',
                textAlign: 'center',
              }}
            >
              Sign In
            </Typography>
            <LockOpenIcon
              sx={{
                backgroundColor: 'green',
                padding: '10px',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                fill: 'white',
              }}
            ></LockOpenIcon>
          </Box>
          <TextField
            value={email}
            name="email"
            type="email"
            onChange={handleChangeInput}
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            fullWidth
            required
            sx={{
              marginTop: '25px',
              width: '300px',
              '& label': {
                color: '#fff',
              },
              '& fieldset': {
                borderColor: '#fff',
              },
              '& input': {
                color: 'white',
              },
              '& input:focus': {
                color: 'white',
              },
            }}
          />
          <Typography
            variant="body1"
            sx={{
              width: '300px',
              textAlign: 'center',
              marginTop: '25px',
              display: 'flex',
              justifyContent: 'flex-end',
              marginBottom: '2px',
            }}
          >
            <Link
              href="/login"
              variant="body2"
              sx={{
                color: '#fff',
              }}
            >
              Forgot password?
            </Link>
          </Typography>

          <TextField
            value={password}
            name="password"
            onChange={handleChangeInput}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            required
            sx={{
              width: '300px',
              zIndex: '100',
              '& label': {
                color: '#fff',
              },
              '& fieldset': {
                borderColor: '#fff',
              },
              '& input': {
                color: '#fff',
              },
              '& input:focus': {
                color: '#fff',
              },
            }}
          />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginTop: '20px',
            }}
          >
            <Checkbox
              sx={{
                padding: '0px',
                color: 'white',
                borderColor: 'white',
                '&.Mui-checked': {
                  color: 'green',
                },
                '&.MuiCheckbox-root': {
                  borderColor: 'white',
                },
              }}
            ></Checkbox>
            <Typography
              variant="body1"
              sx={{ color: '#fff', fontSize: '15px', marginLeft: '3px' }}
            >
              Remember me
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '300px',
              flexDirection: 'column',
            }}
          >
            <Button
              type="submit"
              variant="contained"
              sx={{
                width: '200px',
                marginTop: '30px',
              }}
            >
              Login
            </Button>
          </Box>
          <Box
            sx={{
              display: 'flex',
              width: '300px',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: '#fff',
                width: '300px',
                textAlign: 'center',
                marginTop: '15px',
              }}
            >
              <Link href="/register" variant="body2" sx={{ color: '#fff' }}>
                Don't have an account? Sign Up
              </Link>
            </Typography>
          </Box>
        </Box>
    </Box>
  );
}
