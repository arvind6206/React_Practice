const Option = ({option, onSelect, selected}) => {
    return(
        <button onClick={() => onSelect(option)}
        className={`w-full text-left p-4 border rounded-lg mb-3 transition
        ${
            selected === option ? "bg-blue-500 text-white border-blue-500"
            : "bg-white hover:bg-gray-100"
        }`}>
            {option}
        </button>
    )
}

export default Option