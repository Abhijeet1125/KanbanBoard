import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react';

const initialState = {
  data: {},
  to_display : [],
  groupBy: "",
  sortBy: "",
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    put_data: (state, action) => {
      state.data = action.payload;
    },
    put_groupBy: (state, action) => { 
      localStorage.setItem ("group" , action.payload)      
      state.groupBy = action.payload;
    },
    put_sortBy: (state, action) => {  
      localStorage.setItem ("sort" , action.payload )    
      state.sortBy = action.payload;
    },
    put_todisplay: (state , action ) => { 
      state.to_display = action.payload;
    }
  },
});

export const { put_data, put_sortBy, put_groupBy ,put_todisplay} = dataSlice.actions;
export default dataSlice.reducer;
