import { configureStore } from "@reduxjs/toolkit";

import petReducer from "../reducers/petReducer";
import logger from "redux-logger";

export default configureStore({
  reducer: {
    pets: petReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
