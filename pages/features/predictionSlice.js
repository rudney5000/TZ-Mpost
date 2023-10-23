import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    predictions: [{ id: 1, text: " Will Elon fight Zuckerberg?" }],
    resultDates: [{ id: 1, text: "31.12.23" }],
}

export const predictionSlice = createSlice({
    name: "prediction",
    initialState,
    reducers: {
        addPrediction: (state, action) => {
            const predicition = {
                id: nanoid(),
                text: action.payload,
            }
            state.predictions.push(predicition)
        },
        addResultDate: (state, action) => {
            const resultDate = {
                id: nanoid(),
                text: action.payload,
            }
            state.resultDates.push(resultDate)
        },
        removePrediction: (state, action) => {
            state.predictions = state.predictions.filter(
                (prediction) => prediction.id !== action.payload,
            )
        },
        removeResult: (state, action) => {
            state.resultDates = state.resultDates.filter(
                (resultDate) => resultDate.id !== action.payload,
            )
        },
    },
})

export const { addPrediction, removePrediction, addResultDate, removeResult } =
    predictionSlice.actions

export default predictionSlice.reducer
