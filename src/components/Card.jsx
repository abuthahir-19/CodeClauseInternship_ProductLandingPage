const Card = ({ logo, title, desc}) => {
    return (
        <div className="w-1/3 p-3">
            <div className="flex justify-center items-center">
                <img src={logo} alt="CardIcon" />
            </div>
            <p className="text-center font-medium text-slate-800 text-lg mt-5">{ title }</p>
            <p className="text-center font-normal text-slate-600 mt-3 w-4/5 mx-auto">{ desc }</p>
        </div>
    );
};

export default Card;