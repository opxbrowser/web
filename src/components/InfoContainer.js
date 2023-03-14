import React from "react";

export default function InfoContainer({ children, title }) {
    return (
        <div className="flex flex-col  w-full pl-24 pr-24 h-[100%] pt-28">
            <div className="flex flex-row items-center">
                <div className="w-[120px] h-[4px] bg-dark"></div>
                <span className="ml-14 font-semibold text-6xl">{title}</span>
            </div>
            <div className="pl-44 pr-44 mt-14 text-dark">{children}</div>
        </div>
    );
}
