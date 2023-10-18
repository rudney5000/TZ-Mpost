import React from "react";
import {Input} from "@/components/layout/Input";


export default function login() {
    return (
     <div className="">
         <div className="h-screen w-screen flex justify-center items-center">
             <div className="w-full md:w-1 mx-2 bg-gray-400 p-2 rounded-lg">
                 <h1 className="text-2xl font-bold">Login</h1>
                 <p>Welcome Back</p>
             </div>

             <div className="mt-5">
                 <label htmlFor="email">
                     Email
                 </label>
                 <Input type="email" placeholder="Enter you email" id="email"/>
             </div>
         </div>

     </div>
    )
}