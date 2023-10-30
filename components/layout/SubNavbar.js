import { BsArrowRight } from "react-icons/bs"
import { Link } from "react-router-dom"

export default function SubNavbar() {
    return (
        <nav className=" bg-purple-900 text-white py-4  px-20">
            <ul className="flex  items-center gap-5">
                <li>
                    <Link to="/">Rules</Link>
                </li>
                <li>
                    <Link to="/scoreboard">Scoreboard</Link>
                </li>
                <li>
                    <Link to="/prediction">Prediction</Link>
                </li>

                <li className="flex  ml-auto">
                    <Link to="/login" className="flex-row">
                        <span className="flex flex-row items-center">
                            <BsArrowRight class="mr-3" />
                            Login
                        </span>
                    </Link>
                    <Link to="/register" className="flex-row">
                        <span className="flex flex-row items-center">
                            <BsArrowRight class="mr-3" />
                            Register
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
