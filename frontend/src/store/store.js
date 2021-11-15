import { configureStore } from "@reduxjs/toolkit";

import petReducer from "../reducers/petReducer";

export default configureStore({

 reducer: {

   pets: petReducer,

 },

});