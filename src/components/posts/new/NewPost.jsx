import { AddAPhoto, BarChart, CloudUpload, Delete, Event, Image, PostAdd, Send, Share, VideoCall } from '@mui/icons-material'
import { Button, ButtonGroup, Card, CardContent, CardMedia, FormControlLabel, IconButton, Radio, RadioGroup, Stack, TextField, TextareaAutosize, Typography, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import NewVoiting from './NewVoiting';
import NewPublication from './NewPublication';
import NewEvent from './NewEvent';


const NewPost = () => {

    const [selectedOption, setSelectedOption] = useState('');
    const [selectedFiles, setSelectedFiles] = useState([]);

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    useEffect(() => {

        setSelectedFiles([])
    }, [selectedOption]);
    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    const handleFileChange = (event) => {
        const files = event.target.files;
        const newFiles = Array.from(files);
        setSelectedFiles([...selectedFiles, ...newFiles]);
    };

    const handleRemoveFile = (index) => {
        const updatedFiles = selectedFiles.filter((_, i) => i !== index);
        setSelectedFiles(updatedFiles);
    };

    return (
        <Card>
            <CardContent>
                <Stack spacing={1}>
                    <Stack direction="row" spacing={1}>
                        <TextField maxRows={3} multiline fullWidth />
                        <Button startIcon={<Send />} variant='contained'>Share</Button>
                    </Stack>

                    <Stack spacing={2}>

                        <ButtonGroup fullWidth>

                            <Button
                                variant={selectedOption === 'voting' ? 'contained' : 'outlined'}
                                startIcon={<BarChart />}
                                onClick={() => handleOptionClick('voting')}
                            >
                                Voting
                            </Button>
                            <Button
                                variant={selectedOption === 'event' ? 'contained' : 'outlined'}
                                startIcon={<Event />}
                                onClick={() => handleOptionClick('event')}
                            >
                                Event
                            </Button>
                            <Button
                                variant={selectedOption === 'post' ? 'contained' : 'outlined'}
                                startIcon={<PostAdd />}
                                onClick={() => handleOptionClick('post')}
                            >
                                Post
                            </Button>
                        </ButtonGroup>

                        {
                            selectedOption == "voting" && <NewVoiting />
                        }
                        {
                            selectedOption == "event" && <NewEvent />
                        }
                        {selectedOption && selectedOption != "voting" &&
                            <CardContent>



                                <Stack >
                                    <ButtonGroup fullWidth>

                                        <Button
                                            component="label"
                                            role={undefined}
                                            variant="contained"
                                            tabIndex={-1}
                                            startIcon={<AddAPhoto />}
                                        >
                                            Add Image
                                            <VisuallyHiddenInput type="file" accept="image/*" onChange={handleFileChange} />
                                        </Button>
                                        <Button
                                            component="label"
                                            role={undefined}
                                            variant="contained"
                                            tabIndex={-1}
                                            startIcon={<VideoCall />}
                                        >
                                            Add Video
                                            <VisuallyHiddenInput type="file" accept="video/*" onChange={handleFileChange} />
                                        </Button>
                                    </ButtonGroup>
                                    <NewPublication selectedFiles={selectedFiles} handleRemoveFile={handleRemoveFile} />

                                </Stack>

                            </CardContent>}
                    </Stack>

                </Stack>


            </CardContent >
        </Card >
    )
}

export default NewPost