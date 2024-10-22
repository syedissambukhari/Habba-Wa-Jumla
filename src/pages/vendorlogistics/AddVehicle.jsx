import React, { useEffect, useState } from "react";
import { FaTruck } from "react-icons/fa";
import { BiSolidSquareRounded } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { GenerateVehicleOverviewData } from "../../pages/AdminDashboard/components/VehiclesData";

const AddVehicle = () => {
  const [selectedVehicleId, setSelectedVehicleId] = useState(null);
  const [overviewData, setOverviewData] = useState({
    vehicleStatuses: [],
  });
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state to toggle visibility
  const [selectedVehicle, setSelectedVehicle] = useState(null); // State for selected vehicle for the modal

  useEffect(() => {
    const fetchedData = GenerateVehicleOverviewData();
    setOverviewData(fetchedData); // Update state with fetched data
  }, []);

  const openModal = (vehicle) => {
    setSelectedVehicle(vehicle);
    setIsModalOpen(true); // Open modal and set selected vehicle
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
    setSelectedVehicle(null); // Reset the selected vehicle
  };

  return (
    <div className="relative">
      <div className="ml-8 grid grid-cols-12">
        <div className="col-span-12 p-4 flex flex-col gap-4 relative">
          <div className="flex items-center justify-between">
            <h1 className="text-[23.3px] font-[700] ">Fleet</h1>
            <button
              onClick={() => openModal(overviewData.vehicleStatuses[0])} // Example: Open modal for first vehicle
              className="flex items-center gap-2 rounded-xl border border-[#0B5D51] p-3 text-[#0B5D51]"
            >
              Add Vehicle
              <span>
                <FaPlus color="#0B5D51" />
              </span>
            </button>
          </div>

          {/* Map over the vehicleStatuses array */}
          {overviewData.vehicleStatuses.map((vehicle, index) => (
            <div key={index}>
              {/* Vehicle row */}
              <div
                className="flex items-center gap-4 cursor-pointer p-2 rounded-lg"
                onClick={() =>
                  setSelectedVehicleId(
                    selectedVehicleId === vehicle.id ? null : vehicle.id
                  )
                } // Toggle showing details below when clicking the vehicle
              >
                <div className="bg-slate-100 p-4 rounded-full">
                  <FaTruck size={20} />
                </div>
                <div className="flex flex-col gap-2">
                  <h6 className="text-[16px]">{vehicle.id}</h6>
                  <p className="text-[14px] text-[#6C737F]">
                    {vehicle.startingRoute}
                  </p>
                </div>
              </div>

              {/* Vehicle details (conditionally rendered below the selected vehicle) */}
              {selectedVehicleId === vehicle.id && (
                <div className="ml-10 mt-2">
                  {/* Temperature Bar */}
                  <div className="flex flex-col gap-3">
                    {/* Temperature Status */}
                    <p className="text-[12px] font-medium">
                      Temperature ({vehicle.refrigeratorStatus})
                    </p>
                    <div className="flex items-center w-full">
                      <div className="w-[300px] h-1 bg-gray-200 rounded-full mx-2">
                        <div
                          className="h-1 bg-[#0B5D51] rounded-full"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                      <p className="text-[12px] ml-2">
                        {vehicle.refrigeratorTemperature}
                      </p>
                    </div>
                  </div>

                  {/* Tracking Information */}
                  <div className="mt-4">
                    {vehicle.tracking && vehicle.tracking.length > 0 ? (
                      vehicle.tracking.map((track, trackIndex) => (
                        <div
                          key={trackIndex}
                          className="flex items-center my-2"
                        >
                          <BiSolidSquareRounded color="#0B5D51" />
                          <div className="ml-2">
                            <p className="text-[12px]">{track.label}</p>
                            <p className="text-[10px] text-gray-500">
                              {track.date}
                            </p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-[12px] text-gray-500">
                        No tracking information available
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal to add a vehicle */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-start">
          <div className="mt-[150px] bg-white border shadow-lg rounded-lg w-[300px] border-t-[20px] border-b-[20px] border-[#0B5D51] m-8">
            <div className="p-4">
              <h3 className=" text-[18px] font-bold mb-4 text-start">
                Vehicle:
              </h3>
              <div className="flex items-center justify-center gap-7 text-center">
                <div className="bg-slate-100 p-4 rounded-full">
                  <FaTruck size={20} />
                </div>
                <p> {selectedVehicle?.id || "VOL-653CD2"}</p>
              </div>
              <hr className="mt-3 mb-3 border-b border-gray-300" />
              <div className="">
                <h3 className=" text-[18px] font-bold mb-4 text-start">
                  Location:
                </h3>
                <p className="text-center">
                  {" "}
                  {selectedVehicle?.startingRoute || "New York, NY"}
                </p>
                <hr className="mt-3 mb-3 border-b border-gray-300" />
                <div className="mt-4 flex justify-center items-center flex-col gap-5">
                  <button
                    onClick={closeModal}
                    className="border border-[#0B5D51] text-[#0B5D51] px-4 py-2 rounded-full w-[103px]"
                  >
                    Cancel
                  </button>
                  <button className="bg-[#0B5D51] text-white px-4 py-2 rounded-full w-[103px]">
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddVehicle;
