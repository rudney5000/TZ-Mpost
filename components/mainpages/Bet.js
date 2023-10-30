import { useSelector } from "react-redux"
import YesNoButton from "./YesNoButton"
import LineChart from "./LineChart"
import { useState } from "react"
import { options } from "./LineChart"
import { faker } from "@faker-js/faker"
import Boost from "./Boost"

export default function Bet() {
    const predictions = useSelector((state) => state.predictions)
    const pictures = useSelector((state) => state.pictures)
    const amountYEs = useSelector((state) => state.yesBets)
    const amountNo = useSelector((state) => state.noBets)

    /* Payout logic*/

    const sumYes = amountYEs.reduce((acc, curr) => {
        return parseInt(acc) + parseInt(curr.amount)
    }, 0)

    const sumNo = amountNo.reduce((acc, curr) => {
        return parseInt(acc) + parseInt(curr.amount)
    }, 0)
    const now = new Date()
    const lineChartData = []

    const getPayoutValue = (_value) => {
        const value = _value / (sumNo / sumYes + 1)
        return value.toFixed(3)
    }

    for (let i = 0; i < 24; i++) {
        const time = now.getMinutes() + i * 30 * 60 * 1000
        const payout = getPayoutValue(time)

        //function to calculate payout

        lineChartData.push({
            time,
            payout,
        })
    }
    const fakerArray = lineChartData.map((data) => data.payout)
    const [chartData, setChartData] = useState({
        labels: lineChartData.map((data) => data.time),
        options: {
            datalabels: {
                display: true,
                align: "center",
                anchor: "center",
                formatter: function (payout, index, values) {
                    if (payout > 0) {
                        payout = payout.toString()
                        payout = payout.split(/(?=(?:...)*$)/)
                        payout = payout.join(",")
                        return payout
                    } else {
                        payout = ""
                        return payout
                    }
                },
            },
        },

        datasets: [
            {
                label: "Payout Evelotion",
                data: fakerArray.map(() =>
                    faker.datatype.number({
                        min: 0,
                        max: fakerArray[fakerArray.length - 1],
                    }),
                ),
                borderColor: "rgb(88,28,135)",
                backgroundColor: "rgb(88,28,135)",
            },
        ],
    })

    console.log(lineChartData)

    return (
        <>
            <div className="flex flex-row">
                <div class="flex flex-row pr-20 pl-20 mt-10">
                    <div class="flex flex-col items-center pr-20 pl-20 mt-2 gap-6">
                        <div className="flex flex-row justify-between items-center gap-5 ">
                            <ul className="list-none font-bold text-2xl ">
                                {pictures?.map((picture) => (
                                    <li key={picture.id}>
                                        <div>
                                            {typeof picture.file == "object" ? (
                                                <img
                                                    src={URL.createObjectURL(picture.file)}
                                                    alt="Preview"
                                                    height="300"
                                                    width="200"
                                                />
                                            ) : (
                                                <dv>
                                                    <img
                                                        src={picture.file}
                                                        alt="Preview"
                                                        height="300"
                                                        width="200"
                                                    />
                                                </dv>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <ul className="list-none font-bold text-2xl ">
                                {predictions?.map((prediction) => (
                                    <li key={prediction.id}>
                                        <div>{prediction.text}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <LineChart chartData={chartData} options={options} />
                        <YesNoButton />
                    </div>
                </div>

                <Boost />
            </div>
        </>
    )
}
