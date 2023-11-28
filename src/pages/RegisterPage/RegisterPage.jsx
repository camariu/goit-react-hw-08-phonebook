import React, { useEffect, useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { Checkbox } from '@mui/material';
import Link from '@mui/material/Link';
import LockIcon from '@mui/icons-material/Lock';
import backgroundImage from '../../images/polygonal-3d-smartphone-gps-navigation-location-app-travelling-concept-phone-navigator-pin-dark-blue-background-smart-technology-digital-illustration.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'components/redux/operations';
import { selectIsAuthentificated } from 'components/redux/selectors';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuthentificated)
  const navigate = useNavigate()

  const handleChangeInput = event => {
    const { name, value } = event.target;
   
     

    if(name=== "email") {
      setEmail(value)
    }else if (name === "password"){
      setPassword(value)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log ( email, password)
    dispatch(register({email: email, password: password}))
  }

  useEffect(() => {
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
        backgroundImage: `url(${backgroundImage}) `,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Box
        sx={{
          margin: 'auto',
          width: ' 100%',
          maxWidth: '300px',
          padding: '25px',
          display: 'flex',
          flexDirection: 'column',
          gap: '25px',
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
            Sign Up
          </Typography>
          <LockIcon
            sx={{
              backgroundColor: 'green',
              padding: '10px',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              fill: 'white',
            }}
          ></LockIcon>
        </Box>

        <TextField
        type='email'
        value={email}
          name="email"
          onChange={handleChangeInput}
          id="outlined-basic"
          label="E-mail"
          variant="outlined"
          fullWidth
          required
          sx={{
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
              color: 'white',
            },
            '& input:focus': {
              color: 'white',
            },
          }}
        />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'flex-start',
          }}
        >
          <Checkbox
            sx={{
              padding: '0px',
              color: 'white',
              '&.Mui-checked': {
                color: 'green',
              },
              '&.MuiCheckbox-root': {
                borderColor: 'white',
              },
            }}
          ></Checkbox>
          <Typography variant="body1" sx={{ color: '#fff', marginLeft: '5px' }}>
            I agree to the{' '}
            <Link href="#" variant="body2">
              Terms & Privacy
            </Link>
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '300px',
          }}
        >
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: '200px',
            }}
          >
            Sign Up
          </Button>
        </Box>
        <Typography
          variant="body1"
          sx={{
            color: '#fff',
            width: ' 300px',
            textAlign: 'center',
          }}
        >
          Alredy have an account ?{' '}
          <Link href="/login" variant="body2" sx={{ color: 'white' }}>
            Sign In
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
