import { AccountInfo } from "./component/AccountInfo";
import { BrowsingHistory } from "./component/BrowsingHistory ";
import PaymentOption from "./component/PaymentOption";


import RecentOrder from "./component/RecentOrder";
import UserProfile from "./component/UserProfile";



const Dashboard = () => {
    return (
      <div className="w-full">
       <div className="bg-white p-6">
      <h1 className="text-2xl font-semibold mb-6">Hello, Kevin</h1>
      <p className="text-gray-600 mb-6">
        From your account dashboard, you can easily check & view your Recent Orders, 
        manage your Shipping and Billing Addresses and edit your Password and Account Details.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
       
        
      </div>
   <AccountInfo />
   <PaymentOption/>
   <RecentOrder/>
   <BrowsingHistory/>
    </div>
      </div>
    );
  };
  
  export default Dashboard;
  