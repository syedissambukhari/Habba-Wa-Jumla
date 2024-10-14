import profilePic from "../../../assets/profile.png";
import {useState} from "react";
import Toggle from "../components/Toggle.jsx";
import {LuSettings2} from "react-icons/lu";


function General() {
    const [isOn1, setIsOn1] = useState(false);
    const [isOn2, setIsOn2] = useState(false);

    return (
        <>
            <div className="mb-8 p-8 rounded-lg shadow-[0px_2px_10px_3px_#0B5D5180]">
                <div className="flex">
                    <div className="basis-1/3">
                        <p className="text-[#111927] text-[16px] font-bold">Basic Details</p>
                    </div>
                    <div className="w-full">
                        <div className="flex gap-6 items-center">
                            <img src={profilePic}/>
                            <p className="text-[#111927] text-[13px] font-bold">Change</p>
                        </div>
                        <div className="mt-8 flex justify-between">
                            <div>
                                <p className="mb-2 text-[#6C737F] text-sm font-semibold">Full Name</p>
                                <p className="text-black text-sm font-medium">Anika Anser</p>
                            </div>
                            <p className="mb-2 text-black text-sm font-semibold">Save</p>
                        </div>
                        <div className="mt-8 flex justify-between">
                            <div>
                                <p className="mb-2 text-[#6C737F] text-sm font-medium">Email Address*</p>
                                <p className="text-[#6C737F] text-sm font-medium">anika.visser@devias.io</p>
                            </div>
                            <p className="mb-2 text-black text-sm font-semibold">Edit</p>
                        </div>
                    </div>
                </div>
            </div>

            {/*    MY CARD 2*/}

            <div className="mb-8 p-8 rounded-lg shadow-[0px_2px_10px_3px_#0B5D5180]">
                <div className="flex">
                    <div className="basis-1/3">
                        <p className="text-[#111927] text-[16px] font-bold">Public Profile</p>
                    </div>
                    <div className="w-full">
                        <div className="mb-8 flex justify-between">
                            <div>
                                <p className="mb-2 text-[#111927] text-[16px] font-bold">Make Contact Info Public</p>
                                <p className="mb-2 text-[#6C737F] text-sm font-medium">Means that anyone viewing your
                                    profile will be able to see your contacts details.</p>
                            </div>
                            <Toggle handleToggle={() => setIsOn1(!isOn1)} isOn={isOn1}/>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <p className="mb-2 text-[#111927] text-[16px] font-bold">Available to hire</p>
                                <p className="mb-2 text-[#6C737F] text-sm font-medium">Toggling this will let your
                                    teammates
                                    know that you are available for acquiring new projects.</p>
                            </div>
                            <Toggle handleToggle={() => setIsOn2(!isOn2)} isOn={isOn2}/>
                        </div>
                    </div>
                </div>
            </div>


            {/*  MY CARD 3  */}

            <div className="relative mb-8 p-8 rounded-lg shadow-[0px_2px_10px_3px_#0B5D5180]">
                <div className="bg-[#0B5D51] p-3 rounded-3xl absolute top-[-20px] right-0 mt-2 mr-2">
                    <LuSettings2 size={28} color="white"/>
                </div>
                <div className="flex">
                    <div className="basis-1/3">
                        <p className="text-[#111927] text-[16px] font-bold">Delete Account</p>
                    </div>
                    <div className="w-full">
                        <p className="mb-4 text-[#111927] text-[16px] font-bold">Delete your account and all of your
                            source
                            data. This is irreversible.</p>
                        <button className="p-3 border border-[#0B5D51] text-[#0B5D51] rounded-md font-semibold">Delete
                            Account
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
        ;
}

export default General;