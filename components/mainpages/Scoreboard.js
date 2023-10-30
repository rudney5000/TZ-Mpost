import SubNavbar from "../layout/SubNavbar"
export default function Scoreboard({ users, prediction }) {
    return (
        <>
            <SubNavbar />
            <div className="max-w-lg mx-auto py-10">
                <div className="flex flex-row justify-between  font-bold">
                    <h2>Name</h2>
                    <h2>Profit</h2>
                    <h2>WinningRate</h2>
                </div>
                {users?.map((user) => (
                    <div
                        key={user.id}
                        className="flex items-center justify-between p-4 m bg-purple-900 shadow text-white rounded-lg my-8"
                    >
                        <div>
                            <h2 className="text-lg font-bold">{user.name}</h2>
                        </div>

                        <div className="text-xl font-semibold">{user.profit}</div>
                        <div className="text-xl font-semibold">{user.winningRate}</div>
                    </div>
                ))}
            </div>
            {prediction}
        </>
    )
}
