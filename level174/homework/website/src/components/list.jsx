import React from "react";
import './list.css'

export default function List(props) {
    return (
        <>
    <div className="group w-[80%] mt-[20px] bg-[hsl(0,0%,20%)] h-12.5 cursor-pointer  hover:bg-[hsl(75,94%,57%)] rounded-[10px] flex justify-center items-center">
        <p className="font-bold text-white text-[15px]  group-hover:text-[hsl(0,0%,12%)]">{props.txt}</p>
    </div>
    
    </>
    )
}