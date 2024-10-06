import { configureStore } from "@reduxjs/toolkit";
import { persistedReducer } from "./root-reducer";
import persistStore from "redux-persist/es/persistStore";

const store = configureStore({
   reducer: persistedReducer,

   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
