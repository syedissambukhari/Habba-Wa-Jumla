import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa6";
import OrderSummary from "../homecomponents/OrderSummary";
import dollar from "../assets/CurrencyDollar.png";
import venomo from "../assets/Venomo.png";
import paypal from "../assets/Paypal.png";
import amazon from "../assets/Amazonpayy.png";
import card from "../assets/CreditCard.png";

const Checkout = () => {
  const paymentMethods = [
    { id: 1, name: "Cash on Delivery", icon: dollar },
    { id: 2, name: "Venmo", icon: venomo },
    { id: 3, name: "Paypal", icon: paypal },
    { id: 4, name: "Amazon Pay", icon: amazon },
    { id: 5, name: "Debid/Credit Card", icon: card },
  ];
  const [selectedMethod, setSelectedMethod] = useState(null);

  return (
    <div className="flex flex-col gap-10">
      <div className="bg-[#F2F4F5] flex items-center gap-3 px-[120px] p-3">
        <div className="flex gap-2 items-center">
          <AiOutlineHome color="#5F6C72" />
          <p className="text-[#5F6C72]">Home</p>
        </div>
        <div className="flex gap-3 items-center">
          <FaAngleRight color="#5F6C72" />
          <p className="text-[#5F6C72]">Shopping Cart</p>
        </div>
        <div className="flex gap-3 items-center">
          <FaAngleRight color="#5F6C72" />
          <p className="text-[#5F6C72]">Checkout</p>
        </div>
      </div>
      <div className="flex items-center px-[120px]">
        <div className="flex flex-col">
          <h1 className="text-[18px] font-[500]">Billing Information</h1>
          <form action="" className="mt-[50px]">
            {/* Billing form fields */}
            <div className="flex items-center mb-4">
              <div className="flex gap-4">
                <div className="flex flex-col w-[206px]">
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full h-10 px-3 border text-sm text-gray-900"
                  />
                </div>
                <div className="flex flex-col w-[206px]">
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full h-10 px-3 border  text-sm text-gray-900"
                  />
                </div>
              </div>

              <div className="ml-4 flex flex-col" style={{ width: "428px" }}>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="companyName"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  className="w-full h-10 px-3 border  text-sm text-gray-900"
                />
              </div>
            </div>

            <div className="flex items-center mb-4 gap-4">
              <div className="flex flex-col w-[428px]">
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full h-10 px-3 border  text-sm text-gray-900"
                />
              </div>

              <div className="flex flex-col w-[428px]">
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full h-10 px-3 border  text-sm text-gray-900"
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="address"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                className="w-full h-10 px-3 border  text-sm text-gray-900"
              />
            </div>

            <div className="flex items-start mb-4 gap-4">
              <div className="flex flex-col w-[206px]">
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="country"
                >
                  Country
                </label>
                <select
                  id="country"
                  className="w-full h-10 px-3 border  text-sm text-gray-900"
                >
                  <option value="">Country....</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                </select>
              </div>

              <div className="flex flex-col w-[206px]">
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="region"
                >
                  Region/State
                </label>
                <select
                  id="region"
                  className="w-full h-10 px-3 border  text-sm text-gray-900"
                >
                  <option value="">Region.....</option>
                  <option value="CA">California</option>
                  <option value="NY">New York</option>
                </select>
              </div>

              <div className="flex flex-col w-[206px]">
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="city"
                >
                  City
                </label>
                <select
                  id="city"
                  className="w-full h-10 px-3 border  text-sm text-gray-900"
                >
                  <option value="">City....</option>
                  <option value="CA">California</option>
                  <option value="NY">New York</option>
                </select>
              </div>

              <div className="flex flex-col w-[206px]">
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="zipCode"
                >
                  Zip Code
                </label>
                <input
                  type="text"
                  id="zipCode"
                  className="w-full h-10 px-3 border  text-sm text-gray-900"
                />
              </div>
            </div>

            {/* Checkbox for shipping to a different address */}
            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                id="differentAddress"
                className="h-4 w-4 text-blue-600 border-gray-300  focus:ring-blue-500"
              />
              <label
                htmlFor="differentAddress"
                className="ml-2 block text-sm text-gray-700"
              >
                Ship to a different address
              </label>
            </div>
          </form>
          <div className="mt-[40px] border border-gray-300  flex flex-col">
            <h1 className="p-4 text-[18px] font-[500]">Payment Option </h1>
            <hr className="border border-gray-200" />
            <div className="flex justify-around items-center p-3">
              {paymentMethods.map((method, index) => (
                <React.Fragment key={method.id}>
                  <div
                    className="flex flex-col items-center space-y-2"
                    onClick={() => setSelectedMethod(method.id)}
                  >
                    <img
                      src={method.icon}
                      alt={method.name}
                      className="w-6 h-6 mr-2"
                    />{" "}
                    {/* Adjust the size as needed */}
                    <p>{method.name}</p>
                    <div
                      className={`w-6 h-6 rounded-full transition ${
                        selectedMethod === method.id
                          ? "border-8 border-green-700 bg-white"
                          : "border-2 border-gray-300 bg-transparent"
                      } flex items-center justify-center`}
                    >
                      {selectedMethod === method.id && (
                        <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                      )}
                    </div>
                  </div>
                  {index < paymentMethods.length - 1 && (
                    <div className="border-l-2 border-gray-300 h-20" />
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="border-t border-gray-300 mt-4 mb-3" />
            <div className="flex flex-col px-4">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="nameOnCard"
              >
                Name on Card
              </label>
              <input
                type="text"
                id="nameOnCard"
                className="w-full h-10 px-3 border  text-sm text-gray-900 mb-3"
              />
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="cardNumber"
              >
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                className="w-full h-10 px-3 border text-sm text-gray-900 mb-3"
              />
              <div className="flex mb-3 gap-4">
                <div className="flex flex-col w-1/2">
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="expiryDate"
                  >
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    id="expiryDate"
                    className="w-full h-10 px-3 border  text-sm text-gray-900"
                    placeholder="MM/YY"
                  />
                </div>
                <div className="flex flex-col w-1/2">
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="cvc"
                  >
                    CVC
                  </label>
                  <input
                    type="text"
                    id="cvc"
                    className="w-full h-10 px-3 border  text-sm text-gray-900"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-6">
            <h1>Additional Information </h1>
            <h6>
              Order Notes{" "}
              <span className="text-[11px] text-[gray]">(Optional)</span>
            </h6>
            <textarea
              className="w-full min-h-[124px] px-3 border  text-sm text-gray-900 resize-none"
              rows={1}
            />
          </div>
        </div>
        <OrderSummary />
      </div>
    </div>
  );
};

export default Checkout;
