import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const favouriteSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    addToFavourite: (state, action) => {
      state.value.push(action.payload)
    },
    removeFromFavourite: (state, action) => {
      state.value = state.value.filter(item => item !== action.payload)
    },
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1
    // },
  },
})

// Action creators are generated for each case reducer function
export const { addToFavourite, removeFromFavourite } = favouriteSlice.actions

export default favouriteSlice.reducer