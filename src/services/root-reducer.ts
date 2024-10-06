import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

// Storage options
import campaignSlice from "./slices/campaign-slice";
import storage from "redux-persist/lib/storage";

// Our preffered storage is MMKV Storage
// MMKV cant be used in expo go environment, so we default to Async Storage to use expo go, and MMKV for production.

const persistConfig = {
   key: "root",

   /** Development Build Storage */
   storage,
   whitelist: ["campaignSlice"],
};

const rootReducer = combineReducers({
   campaignSlice,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
