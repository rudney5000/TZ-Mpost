import PredictionPage from "@/components/mainpages/PredictionPage"
import LoginPage from "@/components/mainpages/authPages/login/LoginPage"
import RegisterPage from "@/components/mainpages/authPages/register/RegisterPage"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { useEffect, useState } from "react"
import Scoreboard from "@/components/mainpages/Scoreboard"
import Prediction from "@/components/predictionmarket/Prediction"

const Home = ({ users }) => {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    if (!isClient) {
        return null
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <PredictionPage />,
        },
        {
            path: "/login",
            element: <LoginPage />,
        },
        {
            path: "/register",
            element: <RegisterPage />,
        },
        {
            path: "/scoreboard",
            element: <Scoreboard users={users} />,
        },
        {
            path: "/prediction",
            element: <Prediction />,
        },
    ])

    return <RouterProvider router={router} />
}

// Fetch from api

// const getServerSideProps = async  ({req}) => {
//     const token = req.headers.AuTHORIZATION
//     const profileId = await getProfileId(token)
//     const posts = await prisma.post.findMany({
//         where: {
//             author: {id: profileId},
//         },
//     })
//     return {props: {posts}}
// }

Home.defaultProps = {
    users: [
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
    ],
}

export default Home
