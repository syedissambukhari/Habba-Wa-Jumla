import React from "react";
import HeadingAdmin from "./HeadingAdmin";
import FileGridAdmin from "./FileGridAdmin";
import StorageCard from "./FileStorageAdmin";


const FileManagerBody = () => {

  return (
    <div className="container max-w-[1920px] p-0">
      {/* Grid layout for responsive design */}
      <div className="w-full">
        {/* Full-width Analytics on the first row */}
        <div className="lg:col-span-2">
          <HeadingAdmin />
        </div>

        <div className="flex w-full h-full justify-between">
          <div className="w-[922px] h-[1002px]">
            <FileGridAdmin />
          </div>

          <div className=" flex justify-end ">
            <div className="w-[461px] h-[1002px]">
              <StorageCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileManagerBody;
