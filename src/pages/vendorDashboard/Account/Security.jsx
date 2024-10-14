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
                            <button className="font-semibold text-sm">Edit</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-8 p-8 rounded-lg shadow-[0px_2px_10px_3px_#0B5D5180]">
                <p className="text-[#111927] text-[16px] font-bold">Multi Factor Authentication</p>
                <div className="flex">
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
                        <button className="px-3 py-1 rounded-lg border border-[#6C737F]">
                            <p className="font-bold text-[#0B5D51]">Setup</p>
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
                        <button className="px-3 py-1 rounded-lg border border-[#6C737F]">
                            <p className="font-bold text-[#0B5D51]">Setup</p>
                        </button>
                    </div>
                </div>
            </div>

            <div className="mb-8 p-8 rounded-lg shadow-[0px_2px_10px_3px_#0B5D5180]">
                <div>
                    <p className="text-[#111927] text-[16px] font-bold">Login history</p>
                    <p className="text-[#111927] text-[16px] text-sm">Your recent login activity.</p>
                </div>
            </div>


        </>
    );
}

export default Security;