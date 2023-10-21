import { useState } from "react"
import YesNoButton from "./YesNoButton"
import CreateMarketChild from "./CreateMarketChild"

export default function CreateMarket() {
    const [market, setMarket] = useState("")

    return (
        <>
            <div class="flex flex-col items-center pr-20 pl-20 mt-10">
                <input
                    value={market}
                    onChange={(e) => setMarket(e.target.value)}
                    placeholder="Set market"
                />
                <CreateMarketChild input={market} />

                <YesNoButton />
            </div>
        </>
    )
}
