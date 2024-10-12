const PaymentOption = () => {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg relative">
          <div className="absolute top-3 right-3">
            <button className="text-sm">•••</button>
          </div>
          <h3 className="text-xl mb-4">$95,400.00 USD</h3>
          <p className="text-sm">**** **** **** 3814</p>
          <p className="font-medium">Kevin Gilbert</p>
        </div>
        <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg relative">
          <div className="absolute top-3 right-3">
            <button className="text-sm">•••</button>
          </div>
          <h3 className="text-xl mb-4">$87,583.00 USD</h3>
          <p className="text-sm">**** **** **** 1761</p>
          <p className="font-medium">Kevin Gilbert</p>
        </div>
      </div>
    );
  };
  
  export default PaymentOption;
  