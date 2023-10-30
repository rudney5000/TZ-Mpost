import React from "react"
import { useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { removePrediction, removeResult, removevePicture } from "@/pages/features/predictionSlice"
import CreatePrediction from "./CreatePrediction"
import SubNavbar from "../layout/SubNavbar"
import Result from "./Result"
export default function Prediction() {
    const predictions = useSelector((state) => state.predictions)
    const resultDates = useSelector((state) => state.resultDates)
    const pictures = useSelector((state) => state.pictures)
    const dispatch = useDispatch()
    const [showAdd, setShowAdd] = useState(true)

    const handleClick = () => {
        setShowAdd(false)
    }
    return (
        <>
            <SubNavbar />
            <div className="flex flex-row ">
                <div className="px-20 pt-10 items-center  justify-between ">
                    <div className="flex flex-row">
                        <div className="flex flex-row ">
                            <ul className="list-none flex flex-row ">
                                {console.log(pictures)}
                                {pictures?.map((picture) => (
                                    <li className="flex flex-row gap-4" key={picture.id}>
                                        <div className="font-bold text-2xl ">
                                            {typeof picture.file == "object" ? (
                                                <img
                                                    src={URL.createObjectURL(picture.file)}
                                                    alt="Preview"
                                                    height="300"
                                                    width="200"
                                                />
                                            ) : (
                                                <div>
                                                    <img
                                                        src={picture.file}
                                                        alt="Preview"
                                                        height="300"
                                                        width="200"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                        {/* <button
                                    className="mr-10  bg-purple-800 hover:bg-purple-700 py-2 px-4 rounded"
                                    onClick={() => {
                                        dispatch(removevePicture(picture.id))
                                    }}
                                >
                                    delete
                                </button> */}
                                    </li>
                                ))}
                            </ul>
                            <span className="flex flex-col ml-4 ">
                                <ul className="list-none flex flex-row">
                                    {predictions?.map((prediction) => (
                                        <li className="flex flex-row gap-4" key={prediction.id}>
                                            <div className=" font-bold text-2xl ">
                                                {prediction.text}
                                            </div>
                                            {/* <button
                                    className="mr-10 bg-purple-800 hover:bg-purple-700 py-2 px-4 rounded"
                                    onClick={() => {
                                        dispatch(removePrediction(prediction.id))
                                    }}
                                >
                                    delete
                                </button> */}
                                        </li>
                                    ))}
                                </ul>
                                <br />
                                <ul className="list-none flex flex-row ">
                                    {resultDates?.map((resultDate) => (
                                        <li className="flex flex-row gap-4" key={resultDate.id}>
                                            <div className="font-bold text-2xl ">
                                                Result Date : {resultDate.text}
                                            </div>
                                            {/* <button
                                    className="mr-10  bg-purple-800 hover:bg-purple-700 py-2 px-4 rounded"
                                    onClick={() => {
                                        dispatch(removeResult(resultDate.id))
                                    }}
                                >
                                    delete
                                </button> */}
                                        </li>
                                    ))}
                                </ul>
                            </span>
                        </div>
                    </div>
                    <span className="m-4">
                        <Result />
                    </span>
                </div>
                {showAdd ? (
                    <div className="ml-auto pt-10">
                        <button
                            className="mr-10 bg-purple-800 hover:bg-purple-700 py-2 px-4 rounded text-white"
                            onClick={handleClick}
                        >
                            CreatePrediction
                        </button>
                    </div>
                ) : (
                    <div className="ml-auto px-20">
                        <CreatePrediction />
                    </div>
                )}
            </div>
        </>
    )
}
