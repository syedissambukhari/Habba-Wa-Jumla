import {BsThreeDots} from "react-icons/bs";
import {PiCopyDuotone} from "react-icons/pi";
import {RiVisaLine} from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
function PaymentCard({ amount, cardNumber, cardHolder, cardType,  backgroundColorClassName }) {
    return (
        <div className={`p-6 border rounded ${backgroundColorClassName}`}>
            <div className="flex items-center justify-between">
                <p className="text-white text-[16px] leading-6">{amount}</p>
                <BsThreeDots color="white"/>
            </div>
            <div className="mt-3">
                <p className="text-[11px] text-gray-200">CARD NUMBER</p>
                <div className="flex gap-2 items-center">
                    <p className="text-white text-[20px]">{cardNumber}</p>
                    <PiCopyDuotone color="white"/>
                </div>
            </div>
            <div className="flex items-center justify-between mt-3">
                {
                    cardType === "MASTERCARD" &&
                    <FaCcMastercard size={48} color="white"/>
                }
                {
                    cardType === "VISA" &&
                    <RiVisaLine size={48} color="white"/>
                }
                <p className="text-white text-sm">{cardHolder}</p>
            </div>
        </div>
    );
}

export default PaymentCard;