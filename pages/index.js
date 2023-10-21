import PredictionPage from "@/components/mainpagss/PredictionPage"
import LoginPage from "@/components/mainpagss/authPages/login/LoginPage"
import RegisterPage from "@/components/mainpagss/authPages/register/RegisterPage"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { useEffect, useState } from "react"
import Scoreboard from "@/components/mainpagss/Scoreboard"

const Home = () => {
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
            element: <Scoreboard />,
        },
    ])

    return <RouterProvider router={router} />
}

export default Home
