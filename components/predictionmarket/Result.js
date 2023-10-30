import React from "react"
import Modal from "../mainpages/Modal"
import { useState } from "react"
export default function Result() {
    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {}

    return (
        <div>
            <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
                <div className="p-5 items-center">
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-col">
                            <span className="flex flex-row">
                                <input
                                    className="accent-purple-700"
                                    type="radio"
                                    name="result"
                                    value="happened"
                                />
                                The fight happened
                            </span>
                            <br />
                            <button
                                className="bg-purple-700 rounded "
                                onClick={() => setShowModal(false)}
                            >
                                confirm
                            </button>
                        </div>
                        <div className="flex flex-col ">
                            <span className="flex flex-row">
                                <input
                                    className="accent-purple-700"
                                    type="radio"
                                    name="result"
                                    value="notHappened"
                                />
                                The fight didn't happen
                            </span>
                            <br />
                            <button
                                className="bg-purple-700 rounded"
                                onClick={() => setShowModal(false)}
                            >
                                confirm
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
            <button
                onClick={() => setShowModal(true)}
                className="bg-purple-800 py-2 px-4 text-white rounded"
            >
                set result
            </button>
        </div>
    )
}
