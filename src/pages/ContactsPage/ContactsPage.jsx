import React from 'react';
import { useEffect } from 'react';

import { AddContacts } from 'components/AddContacts/AddContacts';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactsList/ContactsList';
import Loader from 'components/Loader/Loader';
import { fetchContacts } from '../../components/redux/operations';
import { getIsLoading, getError } from '../../components/redux/selectors';
import backgroundImage from '../../images/polygonal-3d-smartphone-gps-navigation-location-app-travelling-concept-phone-navigator-pin-dark-blue-background-smart-technology-digital-illustration.jpg';

import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';

export default function ContactsPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const isLoading = useSelector(getIsLoading);
  const errorMessage = useSelector(getError);

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
         paddingTop:"100px",
         paddingBottom:"150px",
      
        
      }}
    >
      <Box sx={{          paddingBottom:"150px",}} >
        <AddContacts />
        <Filter />
        {isLoading && !errorMessage && <Loader />}
        <ContactList />
      </Box>
    </Box>
  );
}
