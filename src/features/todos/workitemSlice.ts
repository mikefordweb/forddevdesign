import {
  createSlice,
  createSelector,
  createAsyncThunk,
  createEntityAdapter,
  PayloadAction
} from '@reduxjs/toolkit'
import type { RootState } from '../../store'

interface Workitem {
  id: Number;
  title: string;
  text: string;
  sizeStyle: string;
  pageUrl: string;
  imgSrc: string;
  imgClass: string;
}

const workitemAdapter = createEntityAdapter<Workitem>()

const initialState = workitemAdapter.getInitialState()

// Thunk functions
export const fetchWorkitems = createAsyncThunk('workitem/fetchWorkitems', async () => {
    const response = await fetch("https://new-sa-app-jjgqk.ondigitalocean.app/workitems").then(
      (data) => data.json()
    )
    let wiArr: Workitem[] = [];
    let newResponse = {workitems: wiArr}
    newResponse.workitems = response
    return newResponse;
})

const workitemSlice = createSlice({
    name: 'workitems',
    initialState,
    reducers: {
      workitemToggled(state, action) {
        //const workitemId = action.payload
      },
    },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorkitems.fulfilled, (state, action: any) => {
        workitemAdapter.setAll(state, action.payload)
        //state.status = 'idle'
      })
  },
})

export const {
    workitemToggled
} = workitemSlice.actions

export default workitemSlice.reducer

export const {
  selectAll: selectWorkitems
} = workitemAdapter.getSelectors((state: RootState) => state.workitems)

export const selectWorkItems = createSelector(
  selectWorkitems,
  (workitems: any) => { 
    return workitems.map((workitem: Workitem) => {
      return workitem;
    })
  }
)
