import { createSlice } from "@reduxjs/toolkit";
import { fetchListDrugs } from "./drugsOperations";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const drugsInitialState = {
  listDrugs: [],
  favoriteDrugs: [],
  isLoading: false,
  error: null,
  selectedShop: "",
  listCart: [],
  quantityById: {},
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
        (drug) => drug._id !== action.payload._id
      );
      Notify.failure("Removed from favorites");
    },

    addToListCart: (state, action) => {
      state.listCart = [...state.listCart, action.payload];
      Notify.success("Added to Shopping Cart");
    },

    removeFromListCart: (state, action) => {
      state.listCart = state.listCart.filter(
        (drug) => drug._id !== action.payload._id
      );
      Notify.failure("Removed from Shopping Cart");
    },

    setQuantity: (state, action) => {
      const { drugId, quantity } = action.payload;
      state.quantityById[drugId] = quantity;
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

export const {
  setSelectedShop,
  addToFavorites,
  removeFromFavorites,
  addToListCart,
  removeFromListCart,
  setQuantity,
} = drugsSlice.actions;
export const drugsReducer = drugsSlice.reducer;
