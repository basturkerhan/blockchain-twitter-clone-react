import {configureStore} from "@reduxjs/toolkit";
import dataSlice from "./slices/data";
import contractsSlice from "./slices/contract";
import userSlice from "./slices/user";

export const store = configureStore({
    reducer: {
        data: dataSlice,
        contracts: contractsSlice,
        user: userSlice
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false
        });
    }
});