import { configureStore } from '@reduxjs/toolkit'

import workitemReducer from './features/todos/workitemSlice'
import portfolioReducer from './features/todos/portfolioSlice'

const store = configureStore({
  reducer: {
    workitems: workitemReducer,
    portfolios: portfolioReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store