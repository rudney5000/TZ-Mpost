import { useState } from "react"
import { useDispatch } from "react-redux"
import { addPrediction, addResultDate } from "@/pages/features/predictionSlice"

const CreatePrediction = () => {
    // initila state
    const [prediction, setPrediction] = useState("")
    const [resultDate, setResultDate] = useState("")
    const [submitted, setSubmitted] = useState(false)
    //send to the store
    const dispatch = useDispatch()
    const addPredictionHandler = (e) => {
        e.preventDefault()
        //send the input to the store
        dispatch(addPrediction(prediction))
        dispatch(addResultDate(resultDate))
        // reset the states
        setPrediction("")
        setResultDate("")
    }

    // keep track of submission
    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <div className="pt-10">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md max-w-md">
                <div className="flex flex-col mb-4">
                    <input
                        className="border p-2 rounded-lg"
                        value={prediction}
                        onChange={(e) => setPrediction(e.target.value)}
                        placeholder="Enter predicition"
                    ></input>
                </div>

                <div className="flex flex-col mb-4">
                    <input
                        className="border p-2 rounded-lg"
                        value={resultDate}
                        onChange={(e) => setResultDate(e.target.value)}
                        placeholder="Set Result Date"
                    ></input>
                </div>

                <button
                    onClick={addPredictionHandler}
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                    type="submit"
                >
                    Add Prediction
                </button>
            </form>
        </div>
    )
}

// // Add Tailwind classes

// <form className="bg-white p-8 rounded-lg shadow-md max-w-md">

// <div className="flex flex-col mb-4">
//   <label className="font-bold mb-2" htmlFor="prediction">Prediction Name</label>

//   <input
//     className="border p-2 rounded-lg"
//     //...
//   >
// </div>

// <div className="flex flex-col mb-4">
//  <label className="font-bold mb-2" htmlFor="date">Result Date</label>

//   <input
//     className="border p-2 rounded-lg"
//    //...
//   >
// </div>

// <button
//   className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
//   type="submit"
// >
//   Submit
// </button>

// </form>

// // Show result

// <div className="bg-gray-100 p-4 my-8 rounded-lg">

// // ...result

// </div>

export default CreatePrediction
