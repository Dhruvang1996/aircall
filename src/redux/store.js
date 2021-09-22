import { configureStore } from '@reduxjs/toolkit';
import activitiesReducer from './reducer/reducer';

const store = configureStore({
  reducer: {
    activities: activitiesReducer,
  },
});

export default store;
