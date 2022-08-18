import { combineReducers } from "@reduxjs/toolkit";
import { slice } from "./slice";

const rootReducer = combineReducers({
  data: slice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;