import { Stack, TextField } from '@mui/material';
import React, { useState } from 'react';


const NewEvent = () => {
  const [eventName, setEventName] = useState('');
  const [startDate, setStartDate] = useState('DATE');
  const [endDate, setEndDate] = useState('DATE');
  const [comment, setComment] = useState('');

  return (
    <Stack spacing={1} padding={1}>
      <TextField
        label="Event"
        size="small"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />
      <Stack direction="row" spacing={1}>
        <TextField
          fullWidth
          size="small"
          label="Start Date"
        
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <TextField
          fullWidth
          size="small"
          label="End Date"
          type="date"
          value={endDate}
          
          onChange={(e) => setEndDate(e.target.value)}
        />
      </Stack>
      <TextField
        size="small"
        label="Comment"
        value={comment}
        multiline
        rows={2}
        onChange={(e) => setComment(e.target.value)}
      />
    </Stack>
  );
};

export default NewEvent;
