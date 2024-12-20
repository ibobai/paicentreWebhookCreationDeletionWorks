import { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface EventsChartProps {
  events: any[];
}

export function EventsChart({ events }: EventsChartProps) {
  const chartData = useMemo(() => {
    const providerCounts = events.reduce((acc, event) => {
      const date = new Date(event.created * 1000 || event.create_time).toLocaleDateString();
      if (!acc[date]) {
        acc[date] = { date, stripe: 0, paypal: 0 };
      }
      acc[date][event.provider]++;
      return acc;
    }, {});

    return Object.values(providerCounts);
  }, [events]);

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <h3 className="text-sm font-medium text-gray-900 mb-4">Events Over Time</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="stripe" fill="#9333ea" name="Stripe" />
            <Bar dataKey="paypal" fill="#3b82f6" name="PayPal" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}