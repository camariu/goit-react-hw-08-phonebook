import { configureStore,} from '@reduxjs/toolkit';
import { contactBookReducer } from './phoneSlice';
import { filterReducer } from './filterSlice';
import { userReducer} from "./usersSlice"

export const store = configureStore({
  reducer: {
    contacts: contactBookReducer,
    filter: filterReducer,
    user: userReducer,
  },

  middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

 