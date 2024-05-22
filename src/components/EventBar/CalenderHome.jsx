import * as React from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone'; // Saat dilimi eklentisini içe aktarın
import Badge from '@mui/material/Badge';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';
import { Avatar, Card, CardContent, Chip, Divider, Paper, Stack, Typography } from '@mui/material';


dayjs.extend(utc);
dayjs.extend(timezone); // Saat dilimi eklentisini kullan

const highlightedDays = [1, 2, 15];

export default function CalendarHome() {
  const [selectedDate, setSelectedDateInternal] = React.useState(dayjs(new Date()).tz('Europe/Istanbul')); // Türkiye'nin saat dilimine göre saat bilgisini al


  const ServerDay = (props) => {
    const { day, outsideCurrentMonth, ...other } = props;
    const isSelected = !outsideCurrentMonth && highlightedDays.includes(day.date());

    return (
      <Badge
        key={day.toString()}
        overlap="circular"
        badgeContent={isSelected ? '💀' : undefined}
      >
        <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
      </Badge>
    );
  };
  const handleDateChange = (newDate) => {
    setSelectedDateInternal(newDate);
  };
  const handleMonthChange = () => {
    // Handle month change if needed
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Paper sx={{ borderRadius: 3 }} elevation={3} >


        <Stack spacing={1}>
          <DateCalendar
            sx={{ borderRadius: 3, width: "100%", height: 300, }}
            value={selectedDate}
            onChange={handleDateChange}
            onMonthChange={handleMonthChange}
            renderLoading={() => <DayCalendarSkeleton />}
            slots={{
              day: ServerDay,
            }}
          />
          <Stack>
            <Card elevation={3}>
              <CardContent>
                <Typography>{selectedDate.toDate().toDateString()}</Typography>
                <Divider />
              </CardContent>
              <Stack sx={{ overflowY: "auto", maxHeight: 250, minHeight: 250 }} p={1} >
                <Stack spacing={1} direction="row" justifyContent="space-between" alignItems="center" border="1px solid" p={1} borderRadius={3} borderColor="primary.main">
                  <Stack alignItems="center" justifyContent="center">
                    <Avatar sx={{ width: 20, height: 20 }} />
                    <Typography fontSize={10} variant='subtitle2'>Zirrat Bank</Typography>
                  </Stack>
                  <Stack>
                    <Typography>Etkinlik Yürüyüşü</Typography>
                  </Stack>
                  <Stack>
                    <Chip label="12.30" />

                  </Stack>
                </Stack>
              </Stack>
              <Divider />
            </Card>
          </Stack>
        </Stack>
      </Paper>
    </LocalizationProvider>
  );
}
