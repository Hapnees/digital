import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IState {
  email?: string
}

const initialState: IState = {
  email: undefined,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string | undefined>) => {
      state.email = action.payload
    },
  },
})
