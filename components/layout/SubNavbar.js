import { BsArrowRight } from "react-icons/bs"
import { Link } from "react-router-dom"

export default function SubNavbar() {
    return (
        <nav className=" flex w-full h-full sm:h-full sm:w-full  items-center bg-purple-900 text-white py-4 gap-5 px-20">
            <Link to="/">Rules</Link>
            <Link to="/scoreboard">Scoreboard</Link>
            <div className="flex  ml-auto">
                <Link to="/login" className="flex-row">
                    <span className="flex flex-row items-center">
                        <BsArrowRight class="mr-3" />
                        login
                    </span>
                </Link>
            </div>
        </nav>
    )
}
