import { useState } from "react"
import { useDispatch } from "react-redux"
import { addPrediction, addResultDate, addPicture } from "@/pages/features/predictionSlice"

const CreatePrediction = () => {
    // initila state
    const [prediction, setPrediction] = useState("")
    const [resultDate, setResultDate] = useState("")
    const [picture, setPicture] = useState(null)
    const [submitted, setSubmitted] = useState(false)
    //send to the store
    const dispatch = useDispatch()
    const addPredictionHandler = (e) => {
        e.preventDefault()
        //send the input to the store
        dispatch(addPrediction(prediction))
        dispatch(addResultDate(resultDate))
        dispatch(addPicture(picture))
        // reset the states
        setPrediction("")
        setResultDate("")
        setPicture(null)
    }

    // // keep track of submission
    const handleUpload = (e) => {
        setPicture(e.target.files[0])
    }

    const handleDrop = (e) => {
        e.preventDefault()
        setPicture(e.dataTransfer.files[0])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <div className="pt-10">
            <form
                onSubmit={handleSubmit}
                className="bg-slate-400 ml-auto p-8 rounded-lg shadow-md max-w-md"
            >
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

                <div className="flex flex-col mb-4">
                    <label className="flex flex-col items-center p-10 bg-gray-50 rounded">
                        <input
                            type="file"
                            className="hidden"
                            value=""
                            onChange={handleUpload}
                        ></input>

                        {picture && (
                            <img
                                src={URL.createObjectURL(picture)}
                                alt="upload preview"
                                className="mt-4 w-48"
                            />
                        )}

                        <div
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={handleDrop}
                            className="mt-4 bg-gray-100 px-10 py-20 rounded-lg border-2 border-dashed border-gray-300 text-gray-400 text-center"
                        >
                            Drag & Drop Image
                        </div>

                        <p className="mt-2 text-gray-400">PNG, JPG up to 10MB</p>
                    </label>
                </div>

                <button
                    onClick={addPredictionHandler}
                    className="mr-10 bg-purple-900 hover:bg-purple-800 py-2 px-4 rounded text-white"
                    type="submit"
                >
                    Add Prediction
                </button>
            </form>
        </div>
    )
}

// export default function ImageUpload() {

//     const [file, setFile] = useState(null);

//     const handleUpload = (e) => {
//       setFile(e.target.files[0]);
//     }

//     const handleDrop = (e) => {
//       e.preventDefault();
//       setFile(e.dataTransfer.files[0]);
//     }

//     return (
//       <label className="flex flex-col items-center p-10 bg-gray-50 rounded">
//         <input
//           type="file"
//           onChange={handleUpload}
//           className="hidden"
//         />

//         {file && <img src={URL.createObjectURL(file)} alt="upload preview" className="mt-4 w-48"/> }

//         <div
//           onDragOver={e => e.preventDefault()}
//           onDrop={handleDrop}
//           className="mt-4 bg-gray-100 px-10 py-20 rounded-lg border-2 border-dashed border-gray-300 text-gray-400 text-center"
//         >
//           Drag & Drop Image
//         </div>

//         <p className="mt-2 text-gray-400">PNG, JPG up to 10MB</p>

//       </label>
//     )
//   }

export default CreatePrediction
