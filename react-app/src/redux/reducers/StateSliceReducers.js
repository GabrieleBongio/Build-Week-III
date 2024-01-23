import { createSlice } from "@reduxjs/toolkit";

const SliceMain = createSlice({
  name: "mainSlice",
  initialState: {
    dataFetchProfilo: null,
    dataFetchEsperienze: null,
  },

  reducers: {
    setDataFetchProfilo: (state, action) => {
      state.dataFetchProfilo = action.payload;
    },

    setDataFetchEsperienze: (state, action) => {
      state.dataFetchEsperienze = action.payload;
    },
  },
});

export const { setDataFetchProfilo, setDataFetchEsperienze } = SliceMain.actions;
export default SliceMain.reducer;
