import { FaArrowRight } from "react-icons/fa6";
import {LuSettings2} from "react-icons/lu";



function Security() {
    return (
        <>
            <div className="mb-8 p-8 rounded-lg shadow-[0px_2px_10px_3px_#0B5D5180]">
                <div className="flex">
                    <div className="basis-1/3">
                        <p className="text-[#111927] text-[16px] font-bold">Change Password</p>
                    </div>
                    <div className="w-full">
                        <div className="flex gap-4">
                            <input placeholder="Password"
                                   className="px-2 py-1 border-2 outline-black hover:outline-1 w-full" type="text"/>
                            <button className="text-[#0B5D51] font-semibold text-sm">Edit</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-8 p-8 rounded-lg shadow-[0px_2px_10px_3px_#0B5D5180]">
                <p className="text-[#111927] text-[16px] font-bold">Multi Factor Authentication</p>
                <div className="flex mt-8">
                    <div className="basis-1/2">
                        <div className="mb-8">
                            <div className="m-2 flex items-center gap-2">
                                <div className="w-[10px] h-[10px] bg-red-600 rounded-lg"></div>
                                <p className="text-red-600">Off</p>
                            </div>
                            <p className="m-2 text-sm font-bold">Authenticator App</p>
                            <p className="m-2 text-sm font-medium text-[#6C737F]">Use an authenticator app to generate
                                one time security codes.</p>
                        </div>
                        <button className="flex items-center gap-2 px-3 py-1 rounded-lg border border-[#6C737F]">
                            <p className="font-bold text-[#0B5D51]">Setup</p>
                            <FaArrowRight color="#0B5D51"/>
                        </button>
                    </div>
                    <div className="basis-1/2">
                        <div className="mb-8">
                            <div className="m-2 flex items-center gap-2">
                                <div className="w-[10px] h-[10px] bg-red-600 rounded-lg"></div>
                                <p className="text-red-600">Off</p>
                            </div>
                            <p className="m-2 text-sm font-bold">Text Message</p>
                            <p className="m-2 text-sm font-medium text-[#6C737F]">Use your mobile phone to receive
                                security codes via SMS.</p>
                        </div>
                        <button className="flex items-center gap-2 px-3 py-1 rounded-lg border border-[#6C737F]">
                            <p className="font-bold text-[#0B5D51]">Setup</p>
                            <FaArrowRight color="#0B5D51" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="relative mb-8 p-8 rounded-lg shadow-[0px_2px_10px_3px_#0B5D5180]">
                <div className="bg-[#0B5D51] p-3 rounded-3xl absolute top-[45px] right-0 mt-2 mr-2">
                    <LuSettings2 size={28} color="white"/>
                </div>
                <p className="text-[#111927] text-[16px] font-bold">Login history</p>
                <p className="text-[#111927] text-[16px] text-sm">Your recent login activity</p>
                <div className="flex mb-4 mt-4">
                    <div className="basis-1/2">
                        <p className="text-[#2F3746] text-sm font-semibold">LOGIN TYPE</p>
                    </div>
                    <div className="basis-1/2">
                        <p className="text-[#2F3746] text-sm font-semibold">IP ADDRESS</p>
                    </div>
                    <div className="basis-1/2">
                        <p className="text-[#2F3746] text-sm font-semibold">CLIENT</p>
                    </div>
                </div>

                <div className="mt-3 flex items-center">
                    <div className="basis-1/2">
                        <p className="text-black text-sm font-semibold">Credential Login</p>
                        <p className="font-medium text-sm">on 08:14 AM 01/31/2024</p>
                    </div>
                    <div className="basis-1/2">
                        <p className="text-black text-sm font-medium">95.130.17.84</p>
                    </div>
                    <div className="basis-1/2">
                        <p className="text-sm font-medium">Chrome, Mac OS 10.15.7</p>
                    </div>
                </div>

                <div className="mt-3 flex items-center">
                    <div className="basis-1/2">
                        <p className="text-black text-sm font-semibold">Credential Login</p>
                        <p className="font-medium text-sm">on 08:14 AM 01/31/2024</p>
                    </div>
                    <div className="basis-1/2">
                        <p className="text-black text-sm font-medium">95.130.17.84</p>
                    </div>
                    <div className="basis-1/2">
                        <p className="text-sm font-medium">Chrome, Mac OS 10.15.7</p>
                    </div>
                </div>

                <div className="mt-3 flex items-center">
                    <div className="basis-1/2">
                        <p className="text-black text-sm font-semibold">Credential Login</p>
                        <p className="font-medium text-sm">on 08:14 AM 01/31/2024</p>
                    </div>
                    <div className="basis-1/2">
                        <p className="text-black text-sm font-medium">95.130.17.84</p>
                    </div>
                    <div className="basis-1/2">
                        <p className="text-sm font-medium">Chrome, Mac OS 10.15.7</p>
                    </div>
                </div>

            </div>

        </>
    );
}

export default Security;