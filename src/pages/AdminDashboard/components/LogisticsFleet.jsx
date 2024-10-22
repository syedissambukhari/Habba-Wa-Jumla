import React, { useEffect } from "react";
import { useState } from "react";
import { FaTruck } from "react-icons/fa";
import map from "../../../assets/Map.png";
import { BiSolidSquareRounded } from "react-icons/bi";
import { GenerateVehicleOverviewData } from "./VehiclesData";
const LogisticsFleet = () => {
  const [selectedVehicleId, setSelectedVehicleId] = useState(null);
  const [overviewData, setOverviewData] = useState({
    vehicleStatuses: [],
  });
  useEffect(() => {
    const fetcheddata = GenerateVehicleOverviewData;
    setOverviewData(fetcheddata);
  }),
    [];
  return (
    <div className="ml-8 grid grid-cols-12 h-[100vh] w-[100vw]">
      {/* Fleet list on the left */}
      <div className="col-span-3 p-4 flex flex-col gap-4">
        <h1 className="text-[23.3px] font-[700]">Fleet</h1>
        {/* Map over the vehicleStatuses array */}
        {overviewData.vehicleStatuses.map((vehicle, index) => (
          <div key={index}>
            {/* Vehicle row */}
            <div
              className="flex items-center gap-4 cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
              onClick={() =>
                setSelectedVehicleId(
                  selectedVehicleId === vehicle.id ? null : vehicle.id
                )
              } // Toggle showing details when clicking the vehicle
            >
              <div className="bg-slate-100 p-4 rounded-full">
                <FaTruck size={20} />
              </div>
              <div className="flex flex-col gap-2">
                <h6 className="text-[16px]">{vehicle.location}</h6>
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
                    <div className="w-full h-1 bg-gray-200 rounded-full mx-2">
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
                  {vehicle.tracking.length > 0 ? (
                    vehicle.tracking.map((track, trackIndex) => (
                      <div key={trackIndex} className="flex items-center my-2">
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

      {/* Map on the right */}
      <div className="col-span-9">
        <img src={map} alt="Map" />
      </div>
    </div>
  );
};

export default LogisticsFleet;
