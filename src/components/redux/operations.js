import { createAsyncThunk } from '@reduxjs/toolkit';
import { phoneApi } from '../../api/api';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from '../../firebase';
import { createAction } from '@reduxjs/toolkit';
 

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await phoneApi.getAll();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
    
       
      const response = await phoneApi.create(contact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await phoneApi.delete(id);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const register = createAsyncThunk(
  'user/register',
  async (user, thunkAPI) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      console.log(response.user);
      return response.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'user/login',
  async (user, thunkAPI) => {
    try {
      const response = await  signInWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      console.log(response.user);
      return response.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const resetAuthState = createAction('user/resetAuthState');

export const logout = createAsyncThunk('user/logout', async (_, thunkAPI) => {
  try {
    await signOut(auth);
    thunkAPI.dispatch(resetAuthState());
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
