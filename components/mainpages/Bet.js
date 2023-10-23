import { GiPadlock } from "react-icons/gi"
import { useSelector } from "react-redux"
import YesNoButton from "./YesNoButton"

export default function Bet() {
    const predictions = useSelector((state) => state.predictions)
    return (
        <div class="flex flex-row pr-20 pl-20 mt-10">
            <div class="flex flex-col items-center pr-20 pl-20 gap-6">
                <ul className="list-none">
                    {predictions?.map((prediction) => (
                        <li key={prediction.id}>
                            <div>{prediction.text}</div>
                        </li>
                    ))}
                </ul>
                <YesNoButton />
            </div>

            <button class="flex flex-col bg-purple-900 hover:bg-purple-800 text-white rounded-t-xl rounded-b-xl ml-auto mr-10 py-10 px-10 items-center ">
                <GiPadlock />
                <h1>Boost</h1>
            </button>
        </div>
    )
}
