import React from 'react'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

import store from './store'
import { fetchWorkitems } from './features/todos/workitemSlice'
import { fetchPortfolios } from './features/todos/portfolioSlice'

store.dispatch(fetchWorkitems())
store.dispatch(fetchPortfolios())

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);