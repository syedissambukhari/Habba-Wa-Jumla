import React, { useState } from "react";

const Checkbox = ({classname,tagname}) => {
    const [checked, setChecked] = useState(false);

  return (
    <div className={classname}>
      <div className="flex gap-3 items-center mt-2">
      <button
      onClick={() => setChecked(!checked)}
      className={`w-5 h-5 rounded-full  ${
        checked ? "border-[#0B5D51] border-4" : "border-gray-300 border-2"
      } bg-white focus:outline-none`}
    >
    </button>        {tagname}
      </div>
    </div>
  );
};

export default Checkbox;
