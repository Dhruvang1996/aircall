import { createSlice } from '@reduxjs/toolkit';

export const activitySlice = createSlice({
  name: 'activities',
  initialState: {
    activities: [],
  },
  reducers: {
    setActivities: (state, action) => {
      let data = action.payload.filter(element => element.is_archived === false);
      state.activities = data.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
      return state;
    },
    setArchieveActivities(state, action) {
      const index = state.activities.findIndex((activity) => activity.id === action.payload.id);
      state.activities.splice(index, 1, action.payload);
    },
  },
});

export const { setActivities, setArchieveActivities } = activitySlice.actions;

export default activitySlice.reducer;
