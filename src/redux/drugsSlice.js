import { createSlice } from "@reduxjs/toolkit";
import { fetchListDrugs } from "./drugsOperations";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const drugsInitialState = {
  listDrugs: [],
  favoriteDrugs: [],
  isLoading: false,
  error: null,
  selectedShop: "",
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const drugsSlice = createSlice({
  name: "drugs",
  initialState: drugsInitialState,

  reducers: {
    setSelectedShop: (state, action) => {
      state.selectedShop = action.payload;
      Notify.success(`"${action.payload}" is the choosen drug store`);
    },

    addToFavorites: (state, action) => {
      state.favoriteDrugs = [...state.favoriteDrugs, action.payload];
      Notify.success("Added to favorites");
    },

    removeFromFavorites: (state, action) => {
      state.favoriteDrugs = state.favoriteDrugs.filter(
        (drug) => drug.id !== action.payload.id
      );
      Notify.success("Removed from favorites");
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchListDrugs.pending, handlePending)
      .addCase(fetchListDrugs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.listDrugs = action.payload;
      })
      .addCase(fetchListDrugs.rejected, handleRejected);
  },
});

export const { setSelectedShop, addToFavorites, removeFromFavorites } =
  drugsSlice.actions;
export const drugsReducer = drugsSlice.reducer;
