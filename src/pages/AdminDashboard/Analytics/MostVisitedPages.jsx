import React from "react";

const MostVisitedPages = () => {
  const pages = [
    { name: "/", visitors: "95,847", uniqueVisits: "8,584", bounceRate: "16%" },
    {
      name: "/auth/login",
      visitors: "7,500",
      uniqueVisits: "648",
      bounceRate: "5%",
    },
    {
      name: "/dashboard",
      visitors: "85,406",
      uniqueVisits: "568",
      bounceRate: "2%",
    },
    {
      name: "/blog/top-5-react-frameworks",
      visitors: "75,050",
      uniqueVisits: "12,322",
      bounceRate: "12%",
    },
    {
      name: "/blog/understand-programming-principles",
      visitors: "68,003",
      uniqueVisits: "11,645",
      bounceRate: "10%",
    },
    {
      name: "/blog/design-patterns",
      visitors: "49,510",
      uniqueVisits: "10,259",
      bounceRate: "8%",
    },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-full h-full mx-auto">
      <h2 className="text-lg font-semibold mb-4">Most Visited Pages</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr
              className="bg-[#0B5D51] text-white"
            >
              <th className="px-4 py-2 text-left">Page Name</th>
              <th className="px-4 py-2">Visitors</th>
              <th className="px-4 py-2">Unique Page Visits</th>
              <th className="px-4 py-2">Bounce Rate</th>
            </tr>
          </thead>
          <tbody>
            {pages.map((page, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } text-gray-800`}
              >
                <td className="px-4 py-2">
                  <a
                    href={page.name}
                    className="text-green-600 hover:underline flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {page.name}
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h5m0 0v5m0-5L10 17m-7 4h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </a>
                </td>
                <td className="px-4 py-2 text-center">{page.visitors}</td>
                <td className="px-4 py-2 text-center">{page.uniqueVisits}</td>
                <td className="px-4 py-2 text-center">{page.bounceRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MostVisitedPages;
