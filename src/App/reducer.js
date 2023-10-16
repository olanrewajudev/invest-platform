import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  User: {},
  plan: {},
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    dispatchUser: (state, action) => {
        state.User = action.payload
    },
    dispatchPlan: (state, action) => {
      state.plan = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { dispatchUser, dispatchPlan } = counterSlice.actions

export default counterSlice.reducer