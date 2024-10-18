import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const data = [
  { name: 'Linkedin', value: 25 },
  { name: 'Facebook', value: 35 },
  { name: 'Instagram', value: 40 },
];

const COLORS = ['#6366F1', '#FB923C', '#10B981'];

export default function SocialMediaChart() {
  return (
    <div className="max-w-sm w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium">Social Media Sources</h2>
          <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h1m0-4h-1m6 4a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>

        <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx={150}
            cy={150}
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>

        <div className="mt-4 flex justify-center space-x-4 text-sm">
          <div className="flex items-center">
            <span className="w-3 h-3 mr-1 rounded-full bg-blue-400"></span> Linkedin
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 mr-1 rounded-full bg-orange-400"></span> Facebook
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 mr-1 rounded-full bg-green-500"></span> Instagram
          </div>
        </div>
      </div>
    </div>
  );
}
