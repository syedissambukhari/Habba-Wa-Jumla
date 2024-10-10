import {BsThreeDots} from "react-icons/bs";
import {PiCopyDuotone} from "react-icons/pi";
import {RiVisaLine} from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa6";
import { useFloating, useDismiss, useInteractions } from "@floating-ui/react";
import {useState} from "react";

// eslint-disable-next-line react/prop-types
function PaymentCard({ amount, cardNumber, cardHolder, cardType,  backgroundColorClassName }) {
    const [isCardMenuOpen, setIsCardMenuOpen] = useState(false);

    const { refs, floatingStyles, context } = useFloating({
        open: isCardMenuOpen,
        onOpenChange: setIsCardMenuOpen,
        placement: "bottom-start",
    })

    const dismiss = useDismiss(context);

    const {getReferenceProps, getFloatingProps} = useInteractions([
        dismiss
    ])


    return (
        <div className={`p-6 border rounded ${backgroundColorClassName}`}>
            <div className="flex items-center justify-between">
                <p className="text-white text-[16px] leading-6">{amount}</p>
                <div
                    className="cursor-pointer"
                    onClick={() => setIsCardMenuOpen(!isCardMenuOpen)}
                    ref={refs.setReference}
                    {...getReferenceProps()}
                >
                <BsThreeDots
                    color="white"
                />
                </div>
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
            {isCardMenuOpen &&
                <div
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}>
                    <div className="bg-white">
                        <ul className="flex flex-col gap-2 p-2">
                            <li>Edit Card</li>
                            <li>Delete Card</li>
                        </ul>
                    </div>
            </div>}
        </div>
    );
}

export default PaymentCard;