import React from "react";

import {Link} from "react-router-dom";
import SignInForm from "./SignInForm";


export default function login() {
    return (
        // <div className="h-[100vh] bg-blue-950 m-0 ">
        //     <div className="container flex flex-col m-auto mt bg-white pb-[10px] w-[600px]">
        //         <div className="header flex flex-col text-center mt-[30px]">
        //             <div className="text text-violet-950 text-[48px] font-bold">Sign Up</div>
        //             <div className="underline w-[61px] h-[6px] bg-violet-950 rounded-md"></div>
        //         </div>
        //         <div className="inputs mt-[55px] flex flex-col gap-6">
        //             <div className="input flex items-center m-auto w-[480px] h-[80px] bg-gray-100 rounded-md">
        //                 <input type="text" className="px-6 h-[50px] w-[400px] bg-transparent border-none outline-none bg-gray-100 text-[19px]" placeholder="name"/>
        //             </div>
        //             <div className="input flex items-center m-auto w-[480px] h-[80px] bg-gray-100 rounded-md">
        //                 <input type="text" className="px-6 h-[50px] w-[400px] bg-transparent border-none outline-none bg-gray-100 text-[19px]" placeholder="email"/>
        //             </div>
        //             <div className="input flex items-center m-auto w-[480px] h-[80px] bg-gray-100 rounded-md">
        //                 <input type="password" className="px-6 h-[50px] w-[400px] bg-transparent border-none outline-none bg-gray-100 text-[19px]" placeholder="password"/>
        //             </div>
        //         </div>
        //         <div className="forgot-password pl-[62px] mt-[27px] text-gray-600 text-[16px] font-bold">
        //             Lost Password?
        //             <span className="text-blue-900 cursor-pointer">Click Here!</span>
        //         </div>
        //         <div className="submit-container flex gap-4 mx-auto my-6">
        //             <div className="submit">Sign Up</div>
        //             <div className="submit">Login</div>
        //         </div>
        //     </div>
        // </div>

        <SignInForm/>
    );
}