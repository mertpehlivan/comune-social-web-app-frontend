import { Stack, TextField } from '@mui/material';
import React, { useState } from 'react';


const NewEvent = ({eventName, setEventName,startDate, setStartDate,endDate, setEndDate,comment, setComment, location, setLocation}) => {

  return (
    <Stack spacing={1} padding={1}>
      <TextField
        label="Event name"
        size="small"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />
      <TextField size='small' label="City/Country" value={location} onChange={(e)=>setLocation(e.target.value)}/>
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
