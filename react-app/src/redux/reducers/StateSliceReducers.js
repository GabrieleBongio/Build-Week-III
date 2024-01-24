import { createSlice } from "@reduxjs/toolkit";

const SliceMain = createSlice({
    name: "mainSlice",
    initialState: {
        dataFetchProfilo: null,
        dataFetchEsperienze: null,
        dataFetchPaginaNotizie: null,
    },

    reducers: {
        setDataFetchProfilo: (state, action) => {
            state.dataFetchProfilo = action.payload;
        },

        setDataFetchEsperienze: (state, action) => {
            state.dataFetchEsperienze = action.payload;
        },

        setDataFetchPaginaNotizie: (state, action) => {
            state.dataFetchPaginaNotizie = action.payload;
        },
    },
});

export const { setDataFetchProfilo, setDataFetchEsperienze, setDataFetchPaginaNotizie } = SliceMain.actions;
export default SliceMain.reducer;
