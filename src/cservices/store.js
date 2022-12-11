import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./contactsApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath] : contactsApi.reducer,
  },
  middleware: (getDefaultMiddleWare)=>
  getDefaultMiddleWare().concat(contactsApi.middleware),
});
setupListeners(store.dispatch);