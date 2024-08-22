// CustomBarChart.jsx

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const data = [
  { name: 'Jul', income: 5000 },
  { name: 'Aug', income: 3500 },
  { name: 'Sep', income: 1600 },
  { name: 'Oct', income: 2000 },
  { name: 'Nov', income: 1000 },
  { name: 'Dec', income: 500 },
];

const CustomBarChart = () => {
  return (
    <div
      style={{
        width: '100%',
        height: 400,
        backgroundColor: '#FFFAF0',
        padding: '20px',
        borderRadius: '8px',
        marginTop: '-50px', // Adjust this value based on your navbar height
        position: 'relative', // To overlap the navbar
        zIndex: 1, // Ensure it stays behind the navbar
      }}
    >
      <h2
        style={{
          marginBottom: '20px',
          fontSize: '24px',
          fontWeight: 'bold',
        }}
      >
        Income (Last 6 Months)
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />
          <XAxis dataKey="name" stroke="#555" />
          <YAxis stroke="#555" />
          <Tooltip formatter={(value) => `$${value}`} />
          <Legend />
          <Bar dataKey="income" fill="#ff9d67" barSize={50} radius={[7, 7, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;
