import { useState, ChangeEvent, HTMLInputTypeAttribute } from "react";





export const Input = ({ className, label, placeholder, type }) => {

    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className={"max-h-20 flex flex-1 flex-col gap-2 " + " " + className}>
            <label className="font-bold ">
                {label}
            </label>
            <input
                className="p-5 h-full max-h-14 bg-input rounded-xl"
                type={type}
                placeholder={placeholder}
                value={value} 
                onChange={handleChange}/>
        </div>
    )
}
