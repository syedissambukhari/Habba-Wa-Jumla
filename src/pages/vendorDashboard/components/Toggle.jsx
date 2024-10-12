// eslint-disable-next-line react/prop-types
function Toggle({ handleToggle, isOn }) {
    return (
        <div
            onClick={handleToggle}
            className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                isOn ? "bg-[#0B5D51]" : "bg-gray-300"
            }`}
        >
            <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                    isOn ? "translate-x-6" : "translate-x-0"
                }`}
            >
            </div>
            {" "}
        </div>
    );
}

export default Toggle;