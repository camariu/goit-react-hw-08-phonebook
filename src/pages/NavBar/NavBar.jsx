import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import TtyIcon from '@mui/icons-material/Tty';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import DrawerComp from 'components/DrawerComp/DrawerComp';
import backgroundImage from '../../images/polygonal-3d-smartphone-gps-navigation-location-app-travelling-concept-phone-navigator-pin-dark-blue-background-smart-technology-digital-illustration.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'components/redux/operations';
import { selectIsAuthentificated } from '../../components/redux/selectors';

export default function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsAuthentificated);

  const redirectLogin = () => {
    navigate('/login');
  };

  const redirectRegister = () => {
    navigate('/register');
  };

  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <React.Fragment>
      <AppBar
        sx={{
          backgroundImage: `url(${backgroundImage}) `,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          padding: '10px',
        }}
      >
        <Toolbar>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Box sx={{display:"flex", alignItems:"center", transition: 'color 0.3s ease-in-out',
                '&:hover': {
                  color: '#00B4FF',
                },}}>
          <TtyIcon></TtyIcon>
          
            <Typography
              variant="h4"
              sx={{
                marginLeft: '20px',
                 
              }}
            >
              PhoneBook
            </Typography>
         
          </Box>
          </Link>

          {isMatch ? (
            <>
              <DrawerComp></DrawerComp>
            </>
          ) : (
            <>
              {!isMatch && (
                <Tabs sx={{ marginLeft: 'auto' }}>
                  {!isAuthenticated ? (
                    <>
                      <Tab
                        label="Sign In"
                        onClick={redirectLogin}
                        sx={{
                          color: 'white',
                          marginLeft: 'auto',
                          fontSize: '20px',
                          marginTop: '5px',
                          '&:hover': {
                            color: '#00B4FF',
                            fontSize: '22px',
                            transform: 'scale(1.1)',
                            transition: 'transform 0.2s ease',
                          },
                        }}
                      ></Tab>
                      <Tab
                        label="Register"
                        onClick={redirectRegister}
                        sx={{
                          color: 'white',
                          marginRight: '25px',
                          fontSize: '20px',
                          marginTop: '5px',
                          '&:hover': {
                            color: '#00B4FF',
                            fontSize: '22px',
                            transform: 'scale(1.1)',
                            transition: 'transform 0.2s ease',
                          },
                        }}
                      ></Tab>
                    </>
                  ) : (
                    <Tab
                      label="Log Out"
                      onClick={handleLogout}
                      sx={{
                        color: 'white',
                        marginLeft: 'auto',
                        fontSize: '20px',
                        marginTop: '5px',
                        '&:hover': {
                          color: '#00B4FF',
                          fontSize: '22px',
                          transform: 'scale(1.1)',
                          transition: 'transform 0.2s ease',
                        },
                      }}
                    ></Tab>
                  )}
                </Tabs>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
