import {
  createSlice,
  createSelector,
  createAsyncThunk,
  createEntityAdapter,
  PayloadAction
} from '@reduxjs/toolkit'
import type { RootState } from '../../store'

interface Portfolio {
  id: Number;
  url: string;
  prev: string;
  next: string;
  title: string;
  text: string;
  columns: string;
  imageArray: string | string[];
}

const portfolioAdapter = createEntityAdapter<Portfolio>()

const initialState = portfolioAdapter.getInitialState()

// Thunk functions
export const fetchPortfolios = createAsyncThunk('portfolio/fetchPortfolios', async () => {
    const response = await fetch("https://new-sa-app-jjgqk.ondigitalocean.app/portfolios").then(
      (data) => data.json()
    )
    let wiArr: Portfolio[] = [];
    let newResponse = {portfolios: wiArr}
    newResponse.portfolios = response
    return newResponse;
})

const portfolioSlice = createSlice({
    name: 'portfolios',
    initialState,
    reducers: {
      portfolioToggled(state, action) {
        //const workitemId = action.payload
      },
    },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPortfolios.fulfilled, (state, action: any) => {
        portfolioAdapter.setAll(state, action.payload)
        //state.status = 'idle'
      })
  },
})

export const {
    portfolioToggled
} = portfolioSlice.actions

export default portfolioSlice.reducer

export const {
  selectAll: selectPortfolios
} = portfolioAdapter.getSelectors((state: RootState) => state.portfolios)

export const selectPortfolio = createSelector(
  selectPortfolios,
  (portfolios: any) => { 
    return portfolios.map((portfolio: Portfolio) => {
      return portfolio;
    })
  }
)
