import React from "react";
import { useState, useEffect } from "react";
import circlechart from "../../assets/Circlechart.png";
import { GoDotFill } from "react-icons/go";
import { BiError } from "react-icons/bi";
import { MdErrorOutline } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import { BiSolidSquareRounded } from "react-icons/bi";
import { GenerateVehicleOverviewData } from "../AdminDashboard/components/VehiclesData";
import { FaTruck } from "react-icons/fa";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const VendorLogisticsDashboard = () => {
  const [overviewData, setOverviewData] = useState({
    onRoute: 0,
    errors: 0,
    deviated: 0,
    late: 0,
    available: 0,
    outOfService: 0,
    veryGoodHealth: 0,
    goodHealth: 0,
    badHealth: 0,
    veryGoodCount: 0, // Added counts
    goodCount: 0,
    badCount: 0,
    vehicleStatuses: [],
  });

  // Fetch data when component mounts
  useEffect(() => {
    setOverviewData(GenerateVehicleOverviewData());
  }, []);

  // Calculate total vehicles
  const totalVehicles =
    overviewData.available + overviewData.outOfService + overviewData.onRoute;

  return (
    <div className="m-[20px] px-4 flex flex-col gap-6">
      <h1 className="text-[33.3px] font-[700]">Logistics</h1>
      <div className="flex items-center justify-between gap-4">
        <div className="bg-white rounded-xl shadow-custom-1 shadow-custom-2 z-20 flex flex-col w-[250px] h-[128px] items-start justify-center px-5 space-y-4">
          <div className="flex items-center gap-4">
            <span>
              <GoDotFill size={30} color="red" />
            </span>
            <h4 className="text-[23px] font-[700]">{overviewData.onRoute}</h4>
          </div>
          <p className="text-[#6C737F] text-[14px]">On route Vehicles</p>
        </div>

        <div className="bg-white rounded-xl shadow-custom-1 shadow-custom-2 z-20 flex flex-col w-[250px] h-[128px] items-start justify-center px-5 space-y-4">
          <div className="flex items-center gap-4">
            <span className="bg-red-50 p-2">
              <BiError size={30} color="red" className="bg-red-50" />
            </span>
            <h4 className="text-[23px] font-[700]">{overviewData.errors}</h4>
          </div>
          <p className="text-[#6C737F] text-[14px]">Vehicles with Errors</p>
        </div>

        <div className="bg-white rounded-xl shadow-custom-1 shadow-custom-2 z-20 flex flex-col w-[250px] h-[128px] items-start justify-center px-5 space-y-4">
          <div className="flex items-center gap-4">
            <span className="bg-red-50   p-2">
              <MdErrorOutline size={30} color="red" className="bg-red-50" />
            </span>
            <h4 className="text-[23px] font-[700]">{overviewData.deviated}</h4>
          </div>
          <p className="text-[#6C737F] text-[14px]">
            Vehicles deviated from route
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-custom-1 shadow-custom-2 z-20 flex flex-col w-[250px] h-[128px] items-start justify-center px-5 space-y-4">
          <div className="flex items-center gap-4">
            <span className="bg-gray-100 p-2">
              <FaClock size={30} color="#0B5D51D9" />
            </span>
            <h4 className="text-[23px] font-[700]">{overviewData.late}</h4>
          </div>
          <p className="text-[#6C737F] text-[14px]">Late vehicles</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="p-4 bg-white rounded-xl shadow-custom-1 shadow-custom-2 w-[510px] h-[380px]">
          <h2 className="text-[17px] font-[700]">Vehicles Overview</h2>
          <div className="flex gap-6 items-center">
            <div>
              <img src={circlechart} alt="" />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-[14] text-[#6C737F]">Total</p>
              <h3 className="font-[700] text-[14px]">{totalVehicles}</h3>{" "}
              {/* Fix: Use totalVehicles directly */}
              <div className="flex items-center justify-between w-60">
                <div className="flex items-center gap-2">
                  <span>
                    <BiSolidSquareRounded color="#0B5D51" />
                  </span>
                  <p className="text-[14px] text-[#6C737F]">Available</p>
                </div>
                <p>{overviewData.available}</p>
              </div>
              <div className="flex items-center justify-between w-60">
                <div className="flex items-center gap-2">
                  <span>
                    <BiSolidSquareRounded color="#F79009" />
                  </span>
                  <p className="text-[14px] text-[#6C737F]">Out Of Service</p>
                </div>
                <p>{overviewData.outOfService}</p>{" "}
                {/* Fix: Correct the field name */}
              </div>
              <div className="flex items-center justify-between w-60">
                <div className="flex items-center gap-2">
                  <span>
                    <BiSolidSquareRounded color="#06AED4" />
                  </span>
                  <p className="text-[14px] text-[#6C737F]">On Route</p>
                </div>
                <p>{overviewData.onRoute}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 bg-white rounded-xl shadow-custom-1 shadow-custom-2 w-[510px] h-[356px]">
          <h2 className="text-[17px] font-[700]">Vehicles Condition</h2>
          <div className="flex justify-between items-center">
            <div className="flex gap-4 mt-4">
              <div className="flex  flex-col space-y-3 items-center justify-between  bg-[#6366F10A] rounded-lg p-4">
                <h2 className="text-[17px] text-[#0B5D51] font-[700]">
                  Very Good
                </h2>

                <CircularProgressbar
                  value={overviewData.veryGoodHealth}
                  text={`${overviewData.veryGoodHealth}%`}
                  styles={buildStyles({
                    pathColor: "#0B5D51",
                    textColor: "#0B5D51",
                    trailColor: "#E6F4EA",
                    backgroundColor: "#0B5D51",
                  })}
                />

                <h3 className="text-[24px] font-bold">
                  {overviewData.veryGoodCount}
                </h3>
                <p className="text-sm text-gray-500">Excellent</p>
              </div>
              <div className="flex  flex-col items-center justify-between  bg-red-50 rounded-lg p-4">
                <h2 className="text-[17px] text-[#F79009] font-[700]">Good</h2>
                <CircularProgressbar
                  value={overviewData.goodHealth}
                  text={`${overviewData.goodHealth}%`}
                  styles={buildStyles({
                    pathColor: "#F79009",
                    textColor: "#F79009",
                    trailColor: "#FFF4E0",
                  })}
                />
                <h3 className="text-[24px] font-bold">
                  {overviewData.goodCount}
                </h3>
                <p className="text-sm text-gray-500">Good condition</p>
              </div>
              <div className="flex  flex-col items-center justify-between  bg-amber-50 rounded-lg p-4">
                <h2 className="text-[17px] text-[#F04438] font-[700]">Bad</h2>
                <CircularProgressbar
                  value={overviewData.badHealth}
                  text={`${overviewData.badHealth}%`}
                  styles={buildStyles({
                    pathColor: "#F04438",
                    textColor: "#F04438",
                    trailColor: "#FEE2E2",
                  })}
                />
                <h3 className="text-[24px] font-bold">
                  {overviewData.badCount}
                </h3>
                <p className="text-sm text-gray-500">Needs attention</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-white rounded-xl shadow-custom-1 shadow-custom-2 z-20 flex flex-col items-start justify-center px-5 space-y-4">
        <div className="flex flex-col  w-full">
          <h1 className="text-[16px] font-[700]">On Route Vehicles</h1>
          <p className="text-[14px] text-[#6C737F]">On Route Vehicles</p>
        </div>
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left bg-gray-100 text-sm">
              <th className="py-2 px-4">Location</th>
              <th className="py-2 px-4">Ending Route</th>
              <th className="py-2 px-4">Starting Route</th>
              <th className="py-2 px-4">Warnings</th>
              <th className="py-2 px-4">Refrigerator Temperature</th>
            </tr>
          </thead>
          <tbody>
            {overviewData.vehicleStatuses &&
            overviewData.vehicleStatuses.length > 0 ? (
              overviewData.vehicleStatuses.map((vehicle, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2 px-4">
                    <div className="flex items-center gap-2">
                      <div className="bg-slate-300 p-4 rounded-full">
                        <FaTruck size={24} />
                      </div>
                      <p className="text-[14px]">{vehicle.location}</p>
                    </div>
                  </td>
                  <td className="py-2 px-4 text-[14px]">
                    {vehicle.endingRoute}
                  </td>
                  <td className="py-2 px-4 text-[14px]">
                    {vehicle.startingRoute}
                  </td>
                  <td className="py-2 px-4">
                    <span
                      className={`inline-block px-2 py-1 rounded-lg text-[#0B815A] text-[14px] ${
                        vehicle.warningColor === "green"
                          ? "bg-slate-50"
                          : vehicle.warningColor === "orange"
                          ? "bg-orange-50"
                          : "bg-red-50"
                      }`}
                    >
                      {vehicle.warning}
                    </span>
                  </td>
                  <td className="py-2 px-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-2 bg-[#0B815A] rounded-full"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                      <span className="ml-2 text-[13px] text-[#6C737F]">
                        {vehicle.refrigeratorTemperature}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">
                      {vehicle.refrigeratorStatus}
                    </p>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-2 px-4 text-center text-gray-500">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VendorLogisticsDashboard;
