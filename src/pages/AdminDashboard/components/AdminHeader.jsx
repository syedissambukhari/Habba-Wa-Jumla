import { IoSearchOutline } from "react-icons/io5";


const AdminHeader = () => {
    return (
        <div className='w-full h-[64px] pt-8 bg-[#FFFFFFCC] backdrop-blur-[6px] flex items-center pl-14 lg:px-8 '>
            {/* Search Icon */}
            <IoSearchOutline className='w-[40px] h-[40px] text-[#0B5D51]' />

            {/* Icons Container */}
            <div className='ml-auto flex items-center space-x-4 '>
                {/* Placeholder for additional icons */}
                <div className='h-[49.6px] w-[212px] flex  justify-between pt-3'>
                    <img src="/flag-uk.svg.svg" alt="flag"  className='w-7 h-7'/>
                    {/* <img src="notifi.svg" alt="notification"  />
          <img src="badge.svg" alt="badge" /> */}
                    <div className="relative inline-block ">
                        {/* Notification Icon */}
                        <img src="/notifi.svg" alt="notification" className="w-6 h-6" />

                        {/* Badge Icon */}
                        <img
                            src="/badge.svg"
                            alt="badge"
                            className="absolute top-[-6px] right-[-6px] w-4 h-4"
                        />
                    </div>
                    <img src="/contac.svg" alt="contacts" className='w-6 h-6' />
                    <img src="/Avatar.svg" alt="avatar" className='w-8 h-8' />

                </div>
                {/* Add more icons here */}
            </div>
        </div>
    );
}

export default AdminHeader;
