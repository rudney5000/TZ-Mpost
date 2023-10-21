export default function Scoreboard() {
    const users = [
        {
            id: 1,
            name: "Alice",
            profit: 100,
            winningRate: `${60}%`,
        },
        {
            id: 1,
            name: "Bob",
            profit: 80,
            winningRate: `${40}%`,
        },
        {
            id: 1,
            name: "Alice",
            profit: 50,
            winningRate: `${20}%`,
        },
    ]

    return (
        <>
            <div className="max-w-lg mx-auto py-10">
                <div className="flex flex-row justify-between  font-bold">
                    <h2>Name</h2>
                    <h2>Profit</h2>
                    <h2>WinningRate</h2>
                </div>
                {users?.map((user) => (
                    <div
                        key={user.id}
                        className="flex items-center justify-between p-4 m bg-purple-900 shadow text-white rounded-lg my-2"
                    >
                        <div>
                            <h2 className="text-lg font-bold">{user.name}</h2>
                        </div>

                        <div className="text-xl font-semibold">{user.profit}</div>
                        <div className="text-xl font-semibold">{user.winningRate}</div>
                    </div>
                ))}
            </div>
        </>
    )
}

// <div key={user.id} className="flex items-center justify-between p-4 bg-white shadow rounded-lg my-2">

// <div>
//   <h2 className="text-lg font-bold">{user.name}</h2>
// </div>

// <div className="text-xl font-semibold">
//   {user.score}
// </div>

// </div>
// ))}

// </div>
