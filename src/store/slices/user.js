import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    username: "",
    name: "",
    bio: "",
    avatarImage: "https://www.shareicon.net/data/512x512/2016/07/26/802043_man_512x512.png",
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload ? action.payload : state.name;
        },
        setUsername: (state, action) => {
            state.username = action.payload ? action.payload : state.name;
        },
        setBio: (state, action) => {
            state.bio = action.payload ? action.payload : state.name;
        }
    }
});

export const {setName,setUsername,setBio} = userSlice.actions;
export default userSlice.reducer;