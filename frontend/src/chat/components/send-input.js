


export const SendInput = (props) => {
    const { className, onChange } = props;
    return (
        <div className={className}>
            <input
                type="text"
                placeholder="Entrez un message"
                onChange={onChange}
                className="w-full py-3 px-5 h-14 rounded-full drop-shadow-xl" />
        </div>
    );
};