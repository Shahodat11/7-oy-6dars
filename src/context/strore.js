import { configureStore  } from '@reduxjs/toolkit'
import wishlistSlice from './slice/wishlistSlice'
import { api } from "./api";

export const store = configureStore({
  reducer: {
    wishlist: wishlistSlice,
    [api.reducerPath]: api.reducer,
  },
    middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware),
})
