import Toggle from "../components/Toggle.jsx";
import {useState} from "react";

function Notifications() {
    const [isOn1, setIsOn1] = useState(false)
    const [isOn2, setIsOn2] = useState(false)
    const [isOn3, setIsOn3] = useState(false)

    return (
        <div className="mb-8 p-8 rounded-lg shadow-[0px_2px_10px_3px_#0B5D5180]">
            <div className="flex">
                <div className="w-full flex flex-col justify-between basis-1/3">
                    <p className="text-[#111927] text-[16px] font-bold">Email</p>
                    <p className="text-[#111927] text-[16px] font-bold">Phone Notifications</p>
                </div>
                <div className="w-full">
                    <div className="mb-8 flex justify-between">
                        <div>
                            <p className="mb-2 text-[#111927] text-[16px] font-bold">Product updates</p>
                            <p className="mb-2 text-[#6C737F] text-sm font-medium">News, announcements, and product updates.</p>
                        </div>
                        <Toggle handleToggle={() => setIsOn1(!isOn1)} isOn={isOn1}/>
                    </div>
                    <div className="mb-8 flex justify-between">
                        <div>
                            <p className="mb-2 text-[#111927] text-[16px] font-bold">Security updates</p>
                            <p className="mb-2 text-[#6C737F] text-sm font-medium">Important notifications about your account security.</p>
                        </div>
                        <Toggle handleToggle={() => setIsOn2(!isOn2)} isOn={isOn2}/>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <p className="mb-2 text-[#111927] text-[16px] font-bold">Security updates</p>
                            <p className="text-[#6C737F] text-sm font-medium">Important notifications about your account security.</p>
                        </div>
                        <Toggle handleToggle={() => setIsOn3(!isOn3)} isOn={isOn3}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Notifications;