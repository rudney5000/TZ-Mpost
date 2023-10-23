import React from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { removePrediction, removeResult } from "@/pages/features/predictionSlice"
import CreatePrediction from "./CreatePrediction"
export default function Prediction() {
    const predictions = useSelector((state) => state.predictions)
    const resultDates = useSelector((state) => state.resultDates)
    const dispatch = useDispatch()

    return (
        <>
            <div>Predictions</div>
            <CreatePrediction />
            <ul className="list-none">
                {predictions?.map((prediction) => (
                    <li key={prediction.id}>
                        <div>{prediction.text}</div>
                        <button
                            onClick={() => {
                                dispatch(removePrediction(prediction.id))
                            }}
                        >
                            delete
                        </button>
                    </li>
                ))}
            </ul>
            <ul className="list-none">
                {resultDates?.map((resultDate) => (
                    <li key={resultDate.id}>
                        <div>{resultDate.text}</div>
                        <button
                            onClick={() => {
                                dispatch(removeResult(resultDate.id))
                            }}
                        >
                            delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}
