import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    twitter: null,
}

export const contractsSlice = createSlice({
    name: "contracts",
    initialState,
    reducers: {
        setTwitterContract: (state, action) => {
            state.twitter = action.payload;
        }
    }
});

export const {setTwitterContract} = contractsSlice.actions;
export default contractsSlice.reducer;