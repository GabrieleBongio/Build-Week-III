import { createSlice } from "@reduxjs/toolkit";

const SliceMain = createSlice({
    name: "mainSlice",
    initialState: {
        dataFetchProfilo: null,
    },

    reducers: {
        setDataFetchProfilo: (state, action) => {
            state.dataFetchProfilo = action.payload;
        },
    },
});

export const { setDataFetchProfilo } = SliceMain.actions;
export default SliceMain.reducer;
