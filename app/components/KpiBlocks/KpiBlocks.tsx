import { Box, Card, CardContent, Typography, Chip, Skeleton } from '@mui/material';
import {
  Storage
} from '@mui/icons-material';

const kpiData = [
  {
    icon: <Storage />,
    value: '2,847',
    label: 'Total Datacenters',
    trend: '+12 this month',
    trendPositive: true,
    iconBgColor: '#EF4444',
  }
];

export default function KPICards() {
  

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        mb: 3,
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}
    >
      {kpiData.map((kpi, index) => (
        <Card
          key={index}
          sx={{
            flex: '1 1 calc(20% - 16px)',
            minWidth: 160,
            height: 160,
            position: 'relative',
            backgroundColor: 'white',
            border: '1px solid #E5E7EB',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
          }}
        >
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              position: 'relative',
            }}
          >
            {/* Icon Badge - Top Right */}
            <Box
              sx={{
                position: 'absolute',
                top: 16,
                right: 16,
                width: 48,
                height: 48,
                borderRadius: '50%',
                backgroundColor: kpi.iconBgColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
              }}
            >
              {kpi.icon}
            </Box>

            {/* Main Content */}
            <Box sx={{ mt: 1, flex: 1 }}>
              {(
                <>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color: '#1F2937',
                      mb: 1,
                    }}
                  >
                    {kpi.value}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#6B7280',
                      mb: 2,
                      fontSize: '0.875rem',
                    }}
                  >
                    {kpi.label}
                  </Typography>
                </>
              )}
            </Box>

            {/* Trend Chip - Bottom */}
            {(
              <Chip
                label={kpi.trend}
                size="small"
                sx={{
                  backgroundColor: kpi.trendPositive
                    ? 'rgba(16, 185, 129, 0.1)'
                    : 'rgba(239, 68, 68, 0.1)',
                  color: kpi.trendPositive ? '#10B981' : '#EF4444',
                  fontSize: '0.75rem',
                  height: 24,
                  alignSelf: 'flex-start',
                  border: 'none',
                }}
              />
            )}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
