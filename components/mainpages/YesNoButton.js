import { Fragment, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addNoBet, addYesBet } from "@/pages/features/predictionSlice"

import Modal from "./Modal"
export default function YesNoButton() {
    const [yesBet, setYesBet] = useState("")
    const [noBet, setNoBet] = useState("")
    const [showBet, setShowBet] = useState(true)
    const [submitted, setSubmitted] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [showModal2, setShowModal2] = useState(false)

    const dispatch = useDispatch()
    const amountYEs = useSelector((state) => state.yesBets)
    const amountNo = useSelector((state) => state.noBets)

    /* Payout logic*/

    const sumYes = amountYEs.reduce((acc, curr) => {
        return parseInt(acc) + parseInt(curr.amount)
    }, 0)

    const sumNo = amountNo.reduce((acc, curr) => {
        return parseInt(acc) + parseInt(curr.amount)
    }, 0)

    const payoutYes = (_value) => {
        const payout = parseInt(_value) * (sumNo / sumYes + 1)

        if (_value.length >= 1) {
            return payout.toFixed(3)
        } else {
            return 0
        }
    }

    const payoutNo = (_value) => {
        const payout = parseInt(_value) * (sumNo / sumYes + 1)

        if (_value.length >= 1) {
            return payout.toFixed(3)
        } else {
            return 0
        }
    }

    console.log(`The sum is: ${sumYes}`)
    console.log(`The sum is: ${sumNo}`)

    //Other //

    const addBetYesHandler = (e) => {
        e.preventDefault()
        dispatch(addYesBet(yesBet))

        // reset all the bets
        setYesBet("")
    }

    const addBetNoHandler = (e) => {
        e.preventDefault()
        dispatch(addNoBet(noBet))
        setNoBet("")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }

    const handleClick = () => {
        setShowBet(false)
    }

    return (
        <Fragment>
            <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
                <div className="p-5 bg-purple-300">
                    <h3 className="text-xl font-semibold text-gray-900 mb-5">Bet Yes</h3>
                    <form onSubmit={handleSubmit}>
                        <input
                            className=" bg-gray-200 w-80 px-3 py-3 mb-3"
                            value={yesBet}
                            placeholder=" Enter amount"
                            onChange={(e) => setYesBet(e.target.value)}
                        />
                        <p>Expected Payout: {payoutYes(yesBet)} </p>
                        <button
                            onClick={addBetYesHandler}
                            className=" px-5 py-3 bg-purple-900 text-base top-0 right-10 text-white leading-5 block border rounded-2xl"
                        >
                            Place Bet
                        </button>
                    </form>
                </div>
            </Modal>

            <Modal isVisible={showModal2} onClose={() => setShowModal2(false)}>
                <div className="p-5 bg-amber-400">
                    <h3 className="text-xl font-semibold text-gray-900 mb-5">Bet No</h3>
                    <form onSubmit={handleSubmit}>
                        <input
                            className=" bg-gray-200 w-80 px-3 py-3 mb-3"
                            value={noBet}
                            placeholder=" Enter amount"
                            onChange={(e) => setNoBet(e.target.value)}
                        />
                        <p>Expected Payout: {payoutNo(noBet)} </p>
                        <button
                            onClick={addBetNoHandler}
                            className=" px-5 py-3 bg-purple-900 text-base top-0 right-10 text-white leading-5 block border rounded-2xl"
                        >
                            Place Bet
                        </button>
                    </form>
                </div>
            </Modal>

            {showBet ? (
                <button
                    className="mr-10 bg-purple-900 hover:bg-purple-800 py-2 px-12 rounded text-white"
                    onClick={handleClick}
                >
                    Bet
                </button>
            ) : (
                <div className="flex flex-row">
                    <button
                        onClick={() => setShowModal(true)}
                        className="mr-10 bg-purple-900 hover:bg-purle-800 py-2 px-12 rounded text-white"
                        type="button"
                    >
                        Yes
                    </button>

                    <button
                        onClick={() => setShowModal2(true)}
                        className="mr-10 bg-amber-700 hover:bg-amber-600 py-2 px-10 rounded text-white"
                    >
                        No
                    </button>
                </div>
            )}
        </Fragment>
    )
}
