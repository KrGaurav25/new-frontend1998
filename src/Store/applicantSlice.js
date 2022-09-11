import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { createAsyncThunk, current } from '@reduxjs/toolkit'
export const STATUSES = Object.freeze({
    IDLE: 'idle',
    LOADING: 'loading',
    ERROR: 'error',
});
const applicantSlice = createSlice({
    name: 'applicantCart',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    reducers: {
        setApplicant(state, action) {
            state.data = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        }
    }
});

export const { setApplicant, setStatus } = applicantSlice.actions;
export default applicantSlice.reducer;

//Thunks
export function fetchApplicants() {
    return async function fetchApplicantThunk(dispatch, getState) {
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const res = await axios.get("http://localhost:9000/dashboard")
            const result = res.data;
            dispatch(setApplicant(result))
            dispatch(setStatus(STATUSES.IDLE))
        } catch (err) {
            console.log(err);
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}