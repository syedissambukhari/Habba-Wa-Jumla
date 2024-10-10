import DashboardSider from '../../homecomponents/DashboardSider'
import PaymentCard from "./component/PaymentCard.jsx";
import AddressCard from "./component/AddressCard.jsx";
import {FaArrowRight} from "react-icons/fa6";
import {useState} from "react";
import {
    FloatingFocusManager,
    FloatingOverlay,
    useClick,
    useDismiss,
    useFloating,
    useInteractions
} from "@floating-ui/react";
import { IoCloseOutline } from "react-icons/io5";



function CardsAndAddressesPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { refs, context } = useFloating({
        open: isModalOpen,
        onOpenChange: setIsModalOpen,
    })

    const dismiss = useDismiss(context);
    const click = useClick(context);

    const {getReferenceProps, getFloatingProps} = useInteractions([
        dismiss,
        click
    ]);

    return (
        <div className="mt-10 flex gap-8 ">
            <div className="basis w-1/3">
            <DashboardSider />
            </div>
            <div className="w-full p-6">
                <div className="mb-6 flex justify-between">
                    <p className="font-medium text-sm leading-[24px]">PAYMENT OPTION</p>
                    <button
                        ref={refs.setReference}
                        {...getReferenceProps()}
                        className="flex gap-2 items-center">
                        <span className="text-[#0B5D51] font-[600px] text-sm leading-[24px]">Add Card</span>
                        <FaArrowRight color="#0B5D51"/>
                    </button>
                </div>
                <div className="flex gap-6">
                    <div className="basis-1/3">
                        <PaymentCard
                            handleEditCard={() => setIsModalOpen(true)}
                            amount="$95, 400.00 USD"
                            cardNumber="**** **** **** 1234"
                            cardHolder="Kevin Gilbert"
                            cardType="VISA"
                            backgroundColorClassName="bg-gradient-to-r from-[#1B6392] to-[#124261]" />
                    </div>
                    <div className="basis-1/3">
                        <PaymentCard
                            amount="$95, 400.00 USD"
                            cardNumber="**** **** **** 1234"
                            cardHolder="Kevin Gilbert"
                            cardType="MASTERCARD"
                            backgroundColorClassName="bg-[#0B5D51]" />
                    </div>
                </div>
                <div className="mt-8 flex justify-between">
                    <AddressCard
                        title="Billing Address"
                        name="Kevin Gilbert"
                        address="East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C, Flat No. 5D, Dhaka - 1200, Bangladesh"
                        phone="0123456789"
                        email="lVc4U@example.com"
                    />
                    <AddressCard
                        title="Shipping Address"
                        name="Kevin Gilbert"
                        address="East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C, Flat No. 5D, Dhaka - 1200, Bangladesh"
                        phone="0123456789"
                        email="lVc4U@example.com"
                    />
                </div>
            </div>
            {isModalOpen &&
                <FloatingOverlay
                lock
                style={{background: 'rgba(0, 0, 0, 0.8)'}}
                >
            <FloatingFocusManager context={context}>
                <div
                    ref={refs.setReference}
                    {...getFloatingProps()}
                    className="flex w-full h-full items-center justify-center"
                >
                    <div className="bg-white p-4 rounded w-1/3">
                        <div className="mb-8 flex items-center justify-between">
                            <p className="text-sm font-medium">ADD NEW CARD</p>
                            <button onClick={() => setIsModalOpen(false)}>
                                <IoCloseOutline color="gray" size={24} />
                            </button>
                        </div>
                        <p className="font-medium">Name on Card</p>
                        <input className="p-2 w-full focus:outline-none" type="text"/>
                        <p className="font-medium">Card Number</p>
                        <input className="p-2 w-full focus:outline-none" type="text"/>
                        <div className="flex gap-2 mb-4">
                            <div>
                                <p className="font-medium">Expiry Date</p>
                                <input className="p-2 w-full focus:outline-none" type="text"/>
                            </div>
                            <div>
                                <p className="font-medium">CCV</p>
                                <input className="p-2 w-full focus:outline-none" type="text"/>
                            </div>
                        </div>
                        <button className="inline-block bg-[#0B5D51] text-white p-4 rounded font-bold">ADD CARD</button>
                    </div>
                </div>
            </FloatingFocusManager>
                </FloatingOverlay>
            }
        </div>
    )
}

export default CardsAndAddressesPage;
