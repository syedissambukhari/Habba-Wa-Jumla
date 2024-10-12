// eslint-disable-next-line react/prop-types
function AddressCard({title, name, address, phone, email}) {
    return (
        <div className="flex flex-col gap-4 justify-between">
            <p className="font-medium text-sm leading-6">{title}</p>
            <div className="flex flex-col gap-2 items-start">
            <p className="font-medium text-[16px] leading-6">{name}</p>
            <p className="text-[#5F6C72] text-sm leading-6">{address}</p>
            <p className="text-[#5F6C72] text-sm leading-6"><span className="text-black">Phone Number:</span> {phone}</p>
                <p className="text-[#5F6C72] text-sm leading-6"><span className="text-black">Email:</span> {email}</p>
                <button className="px-6 py-2 border-2 border-[#0B5D51] font-bold text-[#0B5D51] text-sm">EDIT ADDRESS</button>
            </div>
        </div>
);
}

export default AddressCard;