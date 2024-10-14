import stack1 from "./stack1.png"
import stack2 from "./stack2.png"
import stack3 from "./stack3.png"

function Billing() {
    return (
        <div>
            <div className="mb-8 p-8 rounded-lg shadow-[0px_2px_10px_3px_#0B5D5180]">
                <p className="text-[#111927] text-[16px] font-bold">Change Plan</p>
                <p className="text-[#111927] text-[16px] text-sm">You can upgrade and downgrade whenever you want</p>

                <div className="mt-8 flex gap-4 justify-between">
                    <div className="basis-1/2 mb-8 p-8 rounded-lg shadow-[0px_2px_10px_3px_#0B5D5180]">
                        <img className="mb-8" src={stack1}/>
                        <p className="mb-2 font-bold text-2xl">$0.00<span
                            className="text-[#6C737F] text-sm font-[400px]">/mo</span></p>
                        <p className="text-sm font-semibold">STARTUP</p>
                    </div>
                    <div className="basis-1/2 mb-8 p-8 rounded-lg shadow-[0px_2px_10px_3px_#0B5D5180]">
                        <img className="mb-8" src={stack2}/>
                        <p className="mb-2 font-bold text-2xl">$0.00<span
                            className="text-[#6C737F] text-sm font-[400px]">/mo</span></p>
                        <p className="text-sm font-semibold">STANDARD</p>
                    </div>
                    <div className="basis-1/2 mb-8 p-8 rounded-lg shadow-[0px_2px_10px_3px_#0B5D5180]">
                        <img className="mb-8" src={stack3}/>
                        <p className="mb-2 font-bold text-2xl">$0.00<span
                            className="text-[#6C737F] text-sm font-[400px]">/mo</span></p>
                        <p className="text-sm font-semibold">BUSINESS</p>
                    </div>
                </div>

                <div>
                    <p className="mb-8 font-bold text-[16px] leading-6">Billing Details</p>
                    <div className="">
                        <div className="flex gap-2 m-4">
                            <div className="basis-1/6">
                                <p>Billing name</p>
                            </div>
                            <div className="basis-5/6">
                                <input className="w-full" placeholder="John Doe" type="text"/>
                            </div>
                        </div>
                        <div className="flex gap-2 m-4">
                            <div className="basis-1/6">
                                <p>Card number</p>
                            </div>
                            <div className="basis-5/6">
                                <input className="w-full" placeholder="**** 1111" type="text"/>
                            </div>
                        </div>
                        <div className="flex gap-2 m-4">
                            <div className="basis-1/6">
                                <p>Country</p>
                            </div>
                            <div className="basis-5/6">
                                <input className="w-full" placeholder="Germany" type="text"/>
                            </div>
                        </div>
                        <div className="flex gap-2 m-4">
                            <div className="basis-1/6">
                                <p>Zip / Postal code</p>
                            </div>
                            <div className="basis-5/6">
                                <input className="w-full" placeholder="667123" type="text"/>
                            </div>
                        </div>
                    </div>
                    <p className="mt-8 text-[#6C737F] text-sm">We cannot refund once you purchased a subscription, but
                        you can always<span className="text-[#0B5D51]">Cancel</span></p>
                </div>
            </div>

            <div className="mb-8 p-8 rounded-lg shadow-[0px_2px_10px_3px_#0B5D5180]">
                <p className="text-[#111927] text-[16px] font-bold">Invoice history</p>
                <p className="text-[#111927] text-[16px] text-sm">You can view and download all your previous invoices
                    here. If you’ve just made a payment, it may take a few hours for it to appear in the table
                    below.</p>
                <table className="border-2 border-red-600 w-full">
                    <thead className="w-full">
                        <tr className="left-0">
                            <th>DATE</th>
                            <th>INVOICE (INCL. TAX)</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="w-full border-2 border-pink-600">
                        <tr>
                            <td>2022-01-01</td>
                            <td>$0.00</td>
                            <td><a href="#" className="text-[#0B5D51]">View Invoice</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Billing;