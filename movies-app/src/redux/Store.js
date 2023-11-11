import { configureStore } from "@reduxjs/toolkit";
import WatchListSlice from "../redux/WatchListSlice";

const Store = configureStore({
  reducer: {
    WatchListReducer: WatchListSlice,
  },
});
export default Store;
