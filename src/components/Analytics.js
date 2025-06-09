import React from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';

const Analytics = () => {
  // Sample data for line chart (Monthly Revenue)
  const revenueData = [
    { month: 'Jan', revenue: 4000 },
    { month: 'Feb', revenue: 3000 },
    { month: 'Mar', revenue: 5000 },
    { month: 'Apr', revenue: 2780 },
    { month: 'May', revenue: 1890 },
    { month: 'Jun', revenue: 2390 },
  ];

  // Sample data for bar chart (User Activity)
  const userActivityData = [
    { day: 'Mon', active: 4000, new: 2400 },
    { day: 'Tue', active: 3000, new: 1398 },
    { day: 'Wed', active: 2000, new: 9800 },
    { day: 'Thu', active: 2780, new: 3908 },
    { day: 'Fri', active: 1890, new: 4800 },
    { day: 'Sat', active: 2390, new: 3800 },
    { day: 'Sun', active: 3490, new: 4300 },
  ];

  // Sample data for pie chart (User Distribution)
  const userDistributionData = [
    { name: 'Desktop', value: 400 },
    { name: 'Mobile', value: 300 },
    { name: 'Tablet', value: 200 },
    { name: 'Other', value: 100 },
  ];

  // New data for stacked area chart (Cumulative Growth)
  const growthData = [
    { month: 'Jan', organic: 4000, paid: 2400, referral: 1800 },
    { month: 'Feb', organic: 5000, paid: 3000, referral: 2200 },
    { month: 'Mar', organic: 6000, paid: 4000, referral: 2800 },
    { month: 'Apr', organic: 7000, paid: 5000, referral: 3200 },
    { month: 'May', organic: 8000, paid: 6000, referral: 3800 },
    { month: 'Jun', organic: 9000, paid: 7000, referral: 4200 },
  ];

  // New data for radar chart (Performance Metrics)
  const performanceData = [
    { metric: 'Speed', value: 85 },
    { metric: 'Reliability', value: 90 },
    { metric: 'Security', value: 95 },
    { metric: 'Scalability', value: 80 },
    { metric: 'User Experience', value: 88 },
    { metric: 'Cost Efficiency', value: 82 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="analytics-container" style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Analytics Dashboard</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
        {/* Line Chart */}
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
          <h3>Monthly Revenue</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
          <h3>User Activity</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={userActivityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="active" fill="#8884d8" />
              <Bar dataKey="new" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* New Stacked Area Chart */}
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
          <h3>Growth Channels</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={growthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="organic" stackId="1" stroke="#8884d8" fill="#8884d8" />
              <Area type="monotone" dataKey="paid" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
              <Area type="monotone" dataKey="referral" stackId="1" stroke="#ffc658" fill="#ffc658" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* New Radar Chart */}
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
          <h3>Performance Metrics</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart outerRadius={90} data={performanceData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="metric" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              <Radar name="Performance" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              <Legend />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Pie Chart */}
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', maxWidth: '600px', margin: '0 auto' }}>
        <h3>User Distribution by Device</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={userDistributionData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {userDistributionData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Analytics; 