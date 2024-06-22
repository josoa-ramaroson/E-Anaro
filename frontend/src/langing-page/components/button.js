import React from "react";

export default function Button({ text, className, order, onClick , href}) {
    return (
        <div
            className={
                "text-white py-3 px-8 text-base rounded-lg flex-shrink-0 flex justify-center " +
                className +
                (order == "primary" ? " bg-primary hover:bg-secondary hover:text-primary transition-colors cursor-pointer " : " bg-secondary hover:bg-primary hover:text-white transition-colors cursor-pointer")
            }
            onClick={onClick}
        >
            <a href={href} className="cursor-pointer">{text}</a>
        </div>
    );
}
