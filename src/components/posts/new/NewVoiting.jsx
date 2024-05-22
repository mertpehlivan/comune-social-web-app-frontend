import { QuestionMark, Close, Add } from '@mui/icons-material';
import { Button, Divider, IconButton, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const NewVoting = ({setQuestion,question,options,setOptions}) => {
     
    const handleAddOption = () => {
        setOptions([...options, '']);
    };

    const handleRemoveOption = (index) => {
        const updatedOptions = options.filter((_, i) => i !== index);
        setOptions(updatedOptions);
    };

    const handleOptionChange = (value, index) => {
        const updatedOptions = [...options];
        updatedOptions[index] = value;
        setOptions(updatedOptions);
    };

    return (
        <Stack border="1px solid" borderColor="primary.main" borderRadius={3} p={2} spacing={1}>
            <TextField
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                InputProps={{
                    endAdornment: <QuestionMark sx={{ color: 'primary.main' }} />
                }}
                label="Question"
                size="small"
            />
            <Typography color="primary.main">Choose Voting Options</Typography>
            <Divider />
            <Stack spacing={1}>
                {options.map((option, index) => (
                    <Stack key={index} direction="row" alignItems="center">
                        <TextField
                            fullWidth
                            size='small'
                            value={option}
                            onChange={(e) => handleOptionChange(e.target.value, index)}
                        />
                        <IconButton onClick={() => handleRemoveOption(index)} size="small">
                            <Close sx={{ color: "primary.main" }} />
                        </IconButton>
                    </Stack>
                ))}
                <Button variant='outlined' startIcon={<Add />} onClick={handleAddOption} size="small">
                    Add Option
                </Button>
            </Stack>
        </Stack>
    );
};

export default NewVoting;
