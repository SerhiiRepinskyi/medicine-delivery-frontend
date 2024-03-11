import { configureStore } from "@reduxjs/toolkit";
import { drugsReducer } from "./drugsSlice";

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// Persisting token field from auth slise to localstorage
const drugsPersistConfig = {
  key: "drugs", // Назва ключа в LocalStorage
  version: 1,
  storage,
  whitelist: ["listDrugs", "selectedShop", "favoriteDrugs"],
};

export const store = configureStore({
  reducer: {
    drugs: persistReducer(drugsPersistConfig, drugsReducer),
  },

  // Ігнорує ряд екшенів для виправлення помилок серіалізації при записі в localStorage
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Створення persistor для PersistGate - обгортки App при ініціалізації Redux Persist
export const persistor = persistStore(store);
