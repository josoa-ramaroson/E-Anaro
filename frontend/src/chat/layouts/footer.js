import { sendIcon } from "../assets";


import { SendInput } from "../components/send-input";
import Button from "../components/button";

export const ChatInputFooter = ({handleSubmit, handleChange}) => {
    return (
        <div className="px-12 w-full h-24 bg-blur backdrop-blur-sm shadow-white shadow-sm flex justify-around items-center gap-12">
            <SendInput className="flex-1" onChange={handleChange} />
            <Button
                icon={sendIcon}
                onClick={handleSubmit}
                className="h-10 w-10" />
        </div>
    );
};