import {useState} from "react";
import { IoAdd } from "react-icons/io5";
import { IoRemove } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
function Accordion({ children, title }) {
    const [accordionOpen, setAccordionOpen] = useState(false);
    return (
        <div className="my-2 border-2 border-[#E4E7E9]">
            <button
                onClick={() => setAccordionOpen(!accordionOpen)}
                className={`pt-5 pb-5 px-6 rounded-t w-full flex justify-between ${accordionOpen ? 'bg-[#0B5D51] text-white' : 'bg-[#F2F4F5] text-black'}`}>
                <span className="text-left text-lg font-sans font-semibold leading-6">{title}</span>
                {accordionOpen ? <IoRemove color="white" size={28} /> : <IoAdd color="#475156" size={28} />}
            </button>
            <div className={`border border-[#E4E7E9] grid transition-all duration-300 ease-in-out ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                    <div className="pt-5 pb-5 px-6">
                    {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accordion;