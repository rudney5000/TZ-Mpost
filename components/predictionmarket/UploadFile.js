import { useState } from "react"

export default function ImageUpload() {
    const [file, setFile] = useState(null)

    const handleUpload = (e) => {
        setFile(e.target.files[0])
    }

    const handleDrop = (e) => {
        e.preventDefault()
        setFile(e.dataTransfer.files[0])
    }

    return (
        <label className="flex flex-col items-center p-10 bg-gray-50 rounded">
            <input type="file" onChange={handleUpload} className="hidden" />

            {file && (
                <img src={URL.createObjectURL(file)} alt="upload preview" className="mt-4 w-48" />
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
    )
}
