'use client'
import { Paper, Typography, Box } from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const chartData = [
  { name: 'North America', value: 847, percentage: 29.7, color: '#7C3AED' },
  { name: 'Europe', value: 723, percentage: 25.4, color: '#EC4899' },
  { name: 'Asia', value: 891, percentage: 31.3, color: '#F59E0B' },
  { name: 'South America', value: 156, percentage: 5.5, color: '#10B981' },
  { name: 'Africa', value: 98, percentage: 3.4, color: '#3B82F6' },
  { name: 'Oceania', value: 124, percentage: 4.4, color: '#EF4444' },
  { name: 'Antarctica', value: 8, percentage: 0.3, color: '#6B7280' },
];

const CustomLegend = () => {
  return (
    <Box sx={{ mt: 2 }}>
      {chartData.map((entry, index) => (
        <Box
          key={`legend-${index}`}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 1.5,
            px: 1,
            py: 0.5,
            borderRadius: 1,
            '&:hover': {
              backgroundColor: '#F9FAFB',
            },
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: '2px',
                backgroundColor: entry.color,
              }}
            />
            <Typography variant="body2" sx={{ color: '#1F2937', fontSize: '0.875rem' }}>
              {entry.name}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography
              variant="body2"
              sx={{ color: '#6B7280', fontSize: '0.875rem' }}
            >
              {entry.value.toLocaleString()}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: entry.color,
                fontWeight: 700,
                minWidth: 50,
                textAlign: 'right',
                fontSize: '0.875rem',
              }}
            >
              {entry.percentage}%
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default function GlobalShareChart() {
  return (
    <Paper
      sx={{
        p: 3,
        backgroundColor: 'white',
        border: '1px solid #E5E7EB',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        height: '100%',
      }}
    >
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#1F2937' }}>
        Global Share by Continent
      </Typography>

      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={2}
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #E5E7EB',
              borderRadius: 8,
            }}
            formatter={(value: any, name: any, props?: any) => [
            `${Number(value).toLocaleString()} (${props?.payload?.percentage ?? 0}%)`,
            String(name),
            ]}
          />
        </PieChart>
      </ResponsiveContainer>

      {/* Custom Legend */}
      <CustomLegend />
    </Paper>
  );
}
