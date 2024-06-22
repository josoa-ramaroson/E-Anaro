import { useState, ChangeEvent, HTMLInputTypeAttribute } from "react";



// type InputProps = {
//     id: string;
//     label: string;
//     type: HTMLInputTypeAttribute;
//     placeholder: string;
//     className?: string;
//     error?: string;
// };

export const Input = (props) => {
    const { className, label, placeholder, type, onChange } = props;



  
    return (
        <div className={"max-h-20 flex flex-1 flex-col gap-2 " + " " + className}>
            <input
                className="p-5 h-full text-lg max-h-14 bg-secondary outline-1 outline-primary rounded-lg border border-white text-white"
                type={type}
                placeholder={placeholder}
                onChange={onChange}/>
        </div>
    )
}
