import { useMemo } from 'react';
import { format, startOfMonth, eachMonthOfInterval, isSameMonth } from 'date-fns';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { User } from '../../../types/user';

interface UserGrowthChartProps {
  users: User[];
}

export function UserGrowthChart({ users }: UserGrowthChartProps) {
  const chartData = useMemo(() => {
    // Get the date range
    const oldestUser = users.reduce((oldest, user) => {
      const userDate = new Date(user.createdAt);
      return userDate < oldest ? userDate : oldest;
    }, new Date());

    // Get all months between oldest user and now
    const months = eachMonthOfInterval({
      start: startOfMonth(oldestUser),
      end: new Date()
    });

    // Calculate cumulative users for each month
    return months.map(month => {
      const usersUntilMonth = users.filter(user => {
        const userDate = new Date(user.createdAt);
        return userDate <= month;
      });

      const activeUsers = usersUntilMonth.filter(user => user.status === 'active').length;
      const inactiveUsers = usersUntilMonth.length - activeUsers;

      return {
        month: format(month, 'MMM yyyy'),
        total: usersUntilMonth.length,
        active: activeUsers,
        inactive: inactiveUsers
      };
    });
  }, [users]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-medium text-gray-900 mb-6">User Growth</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="active"
              stackId="1"
              stroke="#4F46E5"
              fill="#818CF8"
              name="Active Users"
            />
            <Area
              type="monotone"
              dataKey="inactive"
              stackId="1"
              stroke="#EF4444"
              fill="#FCA5A5"
              name="Inactive Users"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}