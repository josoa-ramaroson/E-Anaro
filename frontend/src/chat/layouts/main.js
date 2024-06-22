
import { useEffect, useRef } from "react";
import { Message } from "../components/message";



export const ChatMain = ({ listeDeMessage }) => {

    const containerRef = useRef(null);


    const scrollToBottom = () => {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
    };

    useEffect(() => {
        scrollToBottom();
    }, [listeDeMessage]);
    return (
        <div className="h-full w-screen-w-50 max px-8 py-10  flex-1 overflow-y-scroll bg-gray-200"
            ref={containerRef}>
            {
                listeDeMessage.map((currentMessage) => <Message key={currentMessage.id + " " + Math.random()} data={currentMessage} />)
            }
        </div>
    );
};