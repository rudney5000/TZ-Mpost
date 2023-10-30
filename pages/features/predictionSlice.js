import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    predictions: [{ id: 1, text: " Will Elon fight Zuckerberg?" }],
    resultDates: [{ id: 1, text: "31.12.23" }],
    pictures: [
        {
            id: 1,
            file: "https://phantom-marca.unidadeditorial.es/a6bbe21f52f7245279882b269c6aa406/crop/0x0/827x551/resize/1320/f/jpg/assets/multimedia/imagenes/2023/06/29/16880299420396.png",
        },
    ],
    yesBets: [{ id: 1, amount: "100" }],
    noBets: [{ id: 1, amount: "50" }],
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
        addPicture: (state, action) => {
            const picture = {
                id: nanoid(),
                file: action.payload,
            }
            state.pictures.push(picture)
        },
        addYesBet: (state, action) => {
            const yesBet = {
                id: nanoid(),
                amount: action.payload,
            }
            state.yesBets.push(yesBet)
        },
        addNoBet: (state, action) => {
            const noBet = {
                id: nanoid(),
                amount: action.payload,
            }
            state.noBets.push(noBet)
        },
        removeveYesbet: (state, action) => {
            state.yesBets = state.yesBets.filter((yesBet) => yesBet.id !== action.payload)
        },
        removeveNobet: (state, action) => {
            state.noBets = state.noBets.filter((noBet) => noBet.id !== action.payload)
        },

        removevePicture: (state, action) => {
            state.pictures = state.pictures.filter((picture) => picture.id !== action.payload)
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

export const {
    addPrediction,
    removePrediction,
    addResultDate,
    removeResult,
    addPicture,
    removevePicture,
    addNoBet,
    addYesBet,
    removeveNobet,
    removeveYesbet,
} = predictionSlice.actions

export default predictionSlice.reducer
