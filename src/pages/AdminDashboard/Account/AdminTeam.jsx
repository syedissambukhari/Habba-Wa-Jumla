import { MdOutlineEmail } from "react-icons/md";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import image1 from "../../../assets/image1.png"
import image2 from "../../../assets/image2.png"
import {LuSettings2} from "react-icons/lu";
import {IoMdMail} from "react-icons/io";



function AdminTeam() {
    return (
        <div className="relative mb-8 p-8 rounded-lg shadow-[0px_2px_10px_3px_#0B5D5180]">
            <div className="bg-[#0B5D51] p-3 rounded-3xl absolute bottom-[-80px] right-0 mt-2 mr-2">
                <LuSettings2 size={28} color="white"/>
            </div>
            <div className="flex">
                <div className="basis-1/2">
                    <p className="text-[#111927] text-[16px] font-bold">Invite Members</p>
                    <p className="mb-2 text-[#6C737F] text-sm font-medium">You currently pay for 2 Editor Seats.</p>
                </div>
                <div className="w-full">
                    <div className="flex gap-2 items-center">
                        <div className="flex gap-2 border-b-2 items-center w-5/6">
                            <div>
                                <p className="text-sm text-[#6C737F]">Email address</p>
                                <MdOutlineEmail color="#6C737F"/>
                            </div>
                            <input className="focus:outline-0 w-full" type="text"/>
                                <IoMdMail size={28} color="#0B5D51" />
                        </div>
                        <button className="ml-4 rounded-lg bg-[#0B5D51] p-3">
                            <p className="font-semibold text-sm text-white">Send Invite</p>
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-4 flex">
                <div className="basis-2/3">
                    <p className="text-black text-[13px] font-bold">MEMBER</p>
                </div>
                <div className="basis-1/3">
                    <p className="text-black text-[13px] font-bold">ROLE</p>
                </div>
                <div></div>
            </div>

            <div className="mt-4 flex items-center">
                <div className="basis-2/3">
                    <div className="flex gap-2">
                        <img className="rounded-3xl" width="40px" height="40px" src={image1}/>
                        <div>
                            <p className="text-black text-[13px] font-bold">Cao Yu</p>
                            <p>cao.yu@devias.io</p>
                        </div>
                    </div>
                </div>
                <div className="basis-1/3">
                    <div className="bg-[#6366F11F] p-2 rounded-lg inline-block">
                        <p className="font-semibold text-sm">OWNER</p>
                    </div>
                </div>
                <div>
                    <BiDotsHorizontalRounded/>
                </div>
            </div>

            <div className="mt-4 flex items-center">
                <div className="basis-2/3">
                    <div className="flex gap-2">
                        <img className="rounded-3xl" width="40px" height="40px" src={image2}/>
                        <div>
                            <p className="text-black text-[13px] font-bold">Cao Yu</p>
                            <p className="text-[#6C737F] text-sm font-[400px]">cao.yu@devias.io</p>
                        </div>
                    </div>
                </div>
                <div className="basis-1/3">
                    <div className="p-2 rounded-lg inline-block">
                        <p className="font-semibold text-sm">STANDARD</p>
                    </div>
                </div>
                <div>
                    <BiDotsHorizontalRounded/>
                </div>
            </div>
        </div>
    );
}

export default AdminTeam;