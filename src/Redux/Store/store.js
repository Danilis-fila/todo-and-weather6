import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../Slices/todoSlice";
import  weatherSlice  from "../Slices/weatherSlice";

export const store = configureStore({
    reducer: {
        todo: todoSlice,
        weather: weatherSlice,
    },
}) 