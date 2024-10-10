import DashboardSider from '../../homecomponents/DashboardSider'
import PaymentCard from "./component/PaymentCard.jsx";
import AddressCard from "./component/AddressCard.jsx";
import {FaArrowRight} from "react-icons/fa6";


function CardsAndAddressesPage() {
    return (
        <div className="mt-10 flex gap-8 ">
            <div className="basis w-1/3">
            <DashboardSider />
            </div>
            <div className="w-full p-6">
                <div className="mb-6 flex justify-between">
                    <p className="font-medium text-sm leading-[24px]">PAYMENT OPTION</p>
                    <button className="flex gap-2 items-center">
                        <span className="text-[#0B5D51] font-[600px] text-sm leading-[24px]">Add Card</span>
                        <FaArrowRight color="#0B5D51"/>
                    </button>
                </div>
                <div className="flex gap-6">
                    <div className="basis-1/3">
                        <PaymentCard
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
        </div>
    )
}

export default CardsAndAddressesPage;
