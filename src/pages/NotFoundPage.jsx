import NotFoundImage from "../assets/notfound.png";
import { FaArrowLeftLong } from "react-icons/fa6";
import { GoHome } from "react-icons/go";


function NotFoundPage() {
    return (
        <div className="mt-24 flex flex-col gap-3 justify-center items-center">
            <img src={NotFoundImage} />
            <p className="font-semibold text-4xl leading-10">404, Page not found</p>
            <p className="w-1/3 text-center text-[#475156] text-sm font-[400px] leading-6">Something went wrong. It’s look that your requested could not be found. It’s look like the link is broken or the page is removed.</p>
            <div className="flex gap-2">
                <button className="pt-2 pb-2 pl-3 pr-3 flex gap-2 bg-[#0B5D51] justify-center items-center">
                    <FaArrowLeftLong color="white" />
                    <p className="font-bold text-white text-sm leading-6">GO BACK</p>
                </button>
                <button className="pt-2 pb-2 pl-3 pr-3 flex gap-2 justify-center items-center">
                    <GoHome color="#0B5D51" />
                    <p className="font-bold text-[#0B5D51] text-sm leading-6">GO TO HOME</p></button>
            </div>
        </div>
    );
}

export default NotFoundPage;