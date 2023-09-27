import { configureStore } from '@reduxjs/toolkit'

import workitemReducer from './features/todos/workitemSlice'

const store = configureStore({
  reducer: {
    workitems: workitemReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store