import { configureStore } from "@reduxjs/toolkit"
import predictionReducer from "../features/predictionSlice"
export const store = configureStore({
    reducer: predictionReducer,
})
