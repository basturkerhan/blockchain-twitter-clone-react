import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    provider: null,
    signer: null,
    address: null,
    account: null,
    allTweets: null,
}

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setProvider: (state, action) => {
            state.provider = action.payload;
        },
        setSigner: (state, action) => {
            state.signer = action.payload;
        },
        setAddress: (state,action) => {
            state.address = action.payload;
        },
        setAccount: (state,action) => {
            state.account = action.payload;
        },
        setAllTweets: (state,action) => {
            state.allTweets = action.payload;
        },
        sendTweet(state,action) {
            state.allTweets = [...state.allTweets,action.payload];
            state.myTweets = [...state.myTweets,action.payload];
        },
        addTweet(state, action) {
            if(state.allTweets) {
                state.allTweets = [...state?.allTweets, action.payload];
            }
            
        },     
    }
});

export const {setProvider,setSigner,setAddress,setAccount, setAllTweets, addTweet, sendTweet} = dataSlice.actions;
export default dataSlice.reducer;