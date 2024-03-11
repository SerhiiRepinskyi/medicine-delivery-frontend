import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Notify } from "notiflix/build/notiflix-notify-aio";

// axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.baseURL = "https://medicine-delivery-backend-jegj.onrender.com";

export const fetchListDrugs = createAsyncThunk(
  "cars/fetchAllDrugs",
  async (shopName, thunkAPI) => {
    try {
      const response = await axios.get(
        `/api/drugs?shop=${encodeURIComponent(shopName)}`
      );
      return response.data;
    } catch (error) {
      Notify.failure(`Ooops... Sorry, something went wrong: ${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
