import {BsThreeDots} from "react-icons/bs";
import {PiCopyDuotone} from "react-icons/pi";
import {RiVisaLine} from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa6";
import {useFloating, useDismiss, useInteractions, useClick} from "@floating-ui/react";
import {useState} from "react";

// eslint-disable-next-line react/prop-types
function PaymentCard({ handleEditCard, amount, cardNumber, cardHolder, cardType,  backgroundColorClassName }) {

    return (
        <div className={`p-6 border rounded ${backgroundColorClassName}`}>
            <div className="flex items-center justify-between">
                <p className="text-white text-[16px] leading-6">{amount}</p>
                <SimpleMenu>
                    <li onClick={handleEditCard} className="text-[#5F6C72] py-2 cursor-pointer">Edit Card</li>
                    <li className="text-[#5F6C72] py-2 cursor-pointer">Delete Card</li>
                </SimpleMenu>
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



// eslint-disable-next-line react/prop-types
export const SimpleMenu = ({children}) => {
    const [isCardMenuOpen, setIsCardMenuOpen] = useState(false);

    const { refs, floatingStyles, context } = useFloating({
        open: isCardMenuOpen,
        onOpenChange: setIsCardMenuOpen,
        placement: "bottom-start",
    })

    const click = useClick(context);
    const dismiss = useDismiss(context);

    const {getReferenceProps, getFloatingProps} = useInteractions([
        click,
        dismiss
    ])

    return (
        <>
            <div
                className="cursor-pointer"
                ref={refs.setReference}
                {...getReferenceProps()}
            >
                <BsThreeDots
                    color="white"
                />
            </div>
            {isCardMenuOpen &&
                <div
                    ref={refs.setFloating}
                    style={floatingStyles}
                    {...getFloatingProps()}>
                    <div className="bg-white rounded-sm shadow">
                        <ul className="flex flex-col gap-2 p-3 items-start">
                            {children}
                        </ul>
                    </div>
                </div>}
        </>
    )
}

export default PaymentCard;