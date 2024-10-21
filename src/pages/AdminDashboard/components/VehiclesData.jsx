// utils/generateVehicleOverviewData.js
export const GenerateVehicleOverviewData = () => {
  const vehicleStatuses = [
    {
      id: "VOL-653CD1",
      location: "Cleveland, Ohio, USA",
      startingRoute: "Cleveland, Ohio, USA",
      endingRoute: "Cleveland, Ohio, USA",
      warning: "NO WARNINGS",
      warningColor: "green",
      refrigeratorStatus: "Very Good",
      refrigeratorTemperature: "8°C",
      tracking: [
        { label: "Tracking Number Created", date: "Sep 01, 7:53 AM" },
        { label: "Out for Delivery", date: "Sep 01, 8:02 AM" },
        { label: "Arrived", date: "Sep 01, 8:18 AM" },
      ],
    },
    {
      id: "VOL-653CD2",
      location: "Cleveland, Ohio, USA",
      startingRoute: "Cleveland, Ohio, USA",
      endingRoute: "Cleveland, Ohio, USA",
      warning: "TEMPERATURE NOT OPTIMAL",
      warningColor: "orange",
      refrigeratorStatus: "Good",
      refrigeratorTemperature: "7°C",
      tracking: [
        { label: "Tracking Number Created", date: "Sep 02, 6:00 AM" },
        { label: "Out for Delivery", date: "Sep 02, 6:45 AM" },
      ],
    },
    {
      id: "VOL-653CD3",
      location: "Cleveland, Ohio, USA",
      startingRoute: "Cleveland, Ohio, USA",
      endingRoute: "Cleveland, Ohio, USA",
      warning: "ECU NOT RESPONDING",
      warningColor: "red",
      refrigeratorStatus: "Bad",
      refrigeratorTemperature: "10°C",
      tracking: [],
    },
    {
      id: "VOL-653CD4",
      location: "Cleveland, Ohio, USA",
      startingRoute: "Cleveland, Ohio, USA",
      endingRoute: "Cleveland, Ohio, USA",
      warning: "NO WARNINGS",
      warningColor: "green",
      refrigeratorStatus: "Very Good",
      refrigeratorTemperature: "8°C",
      tracking: [
        { label: "Tracking Number Created", date: "Sep 03, 8:00 AM" },
        { label: "Out for Delivery", date: "Sep 03, 8:30 AM" },
        { label: "Arrived", date: "Sep 03, 9:00 AM" },
      ],
    },
  ];

  return {
    onRoute: Math.floor(Math.random() * 100), // Random count of vehicles on route
    errors: Math.floor(Math.random() * 20), // Random count of vehicles with errors
    deviated: Math.floor(Math.random() * 15), // Random count of vehicles deviated from route
    late: Math.floor(Math.random() * 10), // Random count of late vehicles
    available: Math.floor(Math.random() * 50), // Random count of available vehicles
    outOfService: Math.floor(Math.random() * 50), // Random count of out of service vehicles
    veryGoodHealth: Math.floor(Math.random() * 100), // Percentage for Very Good Health
    goodHealth: Math.floor(Math.random() * 100), // Percentage for Good Health
    badHealth: Math.floor(Math.random() * 100), // Percentage for Bad Health
    veryGoodCount: Math.floor(Math.random() * 200), // Count for Very Good Health
    goodCount: Math.floor(Math.random() * 100), // Count for Good Health
    badCount: Math.floor(Math.random() * 50), // Count for Bad Health
    vehicleStatuses, // Include the vehicleStatuses array in the returned object
  };
};
