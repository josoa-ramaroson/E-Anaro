


const currentUser = 1;

export const Message = ({data}) => {

    return (
        <div className={"w-full py-3 flex items-center " + ((data.fromMe) ? " justify-end" : " justify-start")} >
            <div
                className={"max-w-2xl px-5 py-4 flex items-start rounded-2xl" + (data.fromMe ? " bg-primary" : " bg-secondary")}>
                <p className="text-justify text-white">{data.content}</p>
            </div>
        </div>

    );
};