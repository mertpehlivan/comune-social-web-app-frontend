import { AddAPhoto, ArrowCircleUp, BarChart, CloudUpload, Delete, Event, Image, PostAdd, Send, Share, TopicSharp, VideoCall } from '@mui/icons-material'
import { Button, ButtonGroup, Card, CardContent, CardMedia, FormControlLabel, IconButton, Radio, RadioGroup, Stack, TextField, TextareaAutosize, Typography, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import NewVoiting from './NewVoiting';
import NewPublication from './NewPublication';
import NewEvent from './NewEvent';
import { useThemeConfig } from '../../../contexts/ThemeConfigProvider';
import { useParams } from 'react-router-dom';
import { createEvent, createPost, createVoting } from '../../../services/publictionService';
import { useUserContext } from '../../../auth/AuthProvider';

const NewPost = () => {
    const [comment, setComment] = useState('');
    const [object,setObject] = useState(null)

    //todo: Voting --------
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState(['']);


    //todo: Event --------
    const [eventName, setEventName] = useState('');
    const [startDate, setStartDate] = useState('DATE');
    const [endDate, setEndDate] = useState('DATE');
    const [description, setDescription] = useState('');
    const [location,setLocation] = useState("")

    const { id } = useParams()
    const { token } = useUserContext()


    const [selectedOption, setSelectedOption] = useState('post');
    const [selectedFiles, setSelectedFiles] = useState([]);


    const { themeConfig } = useThemeConfig()
    const {
        shareBgColor,
        shareTextColor,
        shareButtonColor,
        shareButtonTextColor,
        shareBorderColor,
        shareBorderSize
    } = themeConfig.shareBar;
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
        if (event.target.files && event.target.files[0]) {
            setSelectedFiles(prev=>[...prev,event.target.files[0]]);
            setObject(URL.createObjectURL(event.target.files[0]))
          }
    };

    const handleRemoveFile = (index) => {
        const updatedFiles = selectedFiles.filter((_, i) => i !== index);
        setSelectedFiles(updatedFiles);
    };


    const handleFetch = async () => {
        if (selectedOption == 'voting') {
            const data = {
                communityId: id,
                privacy: "PUBLIC",
                comment,
                question,
                chicies: options
            }
            const response = createVoting(token, data)
            console.log(response.data)
        } else if (selectedOption == "event") {
            const data = {
                communityId: id,
                privacy: "PUBLIC",
                eventName,
                startDate,
                endDate,
                description,
                selectedFiles,
                location
            };

            // Create a new FormData object
            const formData = new FormData();

            // Append each key-value pair to the FormData object
            formData.append('communityId', data.communityId);
            formData.append('privacy', data.privacy);
            formData.append('eventName', data.eventName);
            formData.append('startDate', data.startDate);
            formData.append('endDate', data.endDate);
            formData.append('description', data.description);
            formData.append('location',data.location)
            selectedFiles.forEach((file, index) => {
                formData.append(`selectedFiles[${index}]`, file);
            });

            const response = await createEvent(token, formData);
            console.log(response.data)
        }else if (selectedOption == "post") {
            const data = {
                communityId: id,
                comment,
                privacy: "PUBLIC",
                selectedFiles,
            };

            const formData = new FormData();
            formData.append('comment',data.comment)
            formData.append('communityId', data.communityId);
            formData.append('privacy', data.privacy);
            selectedFiles.forEach((file, index) => {
                formData.append(`selectedFiles[${index}]`, file);
            });
            try {
                const response = await createPost(token, formData);
                console.log(response)
            } catch (error) {
                console.log(error)
            }

           
            
        }
    }










    return (
        <Card sx={{ bgcolor: shareBgColor, border: `${shareBorderSize}px solid` }}>

            <CardContent>
                <Stack spacing={1}>
                    <Stack direction="row" spacing={1}>
                        <TextField value={comment} onChange={(e) => setComment(e.target.value)} maxRows={3} multiline fullWidth
                            sx={{
                                "& fieldset": { borderColor: shareTextColor },
                                "&:hover fieldset": { borderColor: shareTextColor },
                                "&.Mui-focused fieldset": { borderColor: shareTextColor }
                            }}
                            inputProps={{
                                style: {
                                    color: shareTextColor
                                }
                            }} />
                        <Button onClick={handleFetch} style={{ backgroundColor: shareButtonColor, color: shareButtonTextColor }} startIcon={<Send />} variant='contained'>Share</Button>
                    </Stack>
                    {selectedOption && <Button onClick={() => { setSelectedOption(''); setSelectedFiles(null) }} variant='outlined' startIcon={<ArrowCircleUp />}></Button>}
                    <Stack spacing={2}>

                        <ButtonGroup fullWidth >

                            <Button
                                style={{ backgroundColor: shareButtonColor, color: shareButtonTextColor }}
                                variant={selectedOption === 'voting' ? 'contained' : 'outlined'}
                                startIcon={<BarChart />}
                                onClick={() => handleOptionClick('voting')}
                            >
                                Voting
                            </Button>
                            <Button
                                style={{ backgroundColor: shareButtonColor, color: shareButtonTextColor }}
                                variant={selectedOption === 'event' ? 'contained' : 'outlined'}
                                startIcon={<Event />}
                                onClick={() => handleOptionClick('event')}
                            >
                                Event
                            </Button>
                            <Button
                                style={{ backgroundColor: shareButtonColor, color: shareButtonTextColor }}
                                variant={selectedOption === 'post' ? 'contained' : 'outlined'}
                                startIcon={<PostAdd />}
                                onClick={() => handleOptionClick('post')}
                            >
                                Post
                            </Button>
                        </ButtonGroup>

                        {
                            selectedOption == "voting" && <NewVoiting
                                question={question}
                                setQuestion={setQuestion}
                                options={options}
                                setOptions={setOptions}
                            />
                        }
                        {
                            selectedOption == "event" && <NewEvent
                                comment={description}
                                setComment={setDescription}
                                setEndDate={setEndDate}
                                endDate={endDate}
                                startDate={startDate}
                                setStartDate={setStartDate}
                                setEventName={setEventName}
                                eventName={eventName}
                                setLocation={setLocation}
                                location={location}
                            />
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
                                    <NewPublication object={object} selectedFiles={selectedFiles} handleRemoveFile={handleRemoveFile} />

                                </Stack>

                            </CardContent>}
                    </Stack>

                </Stack>


            </CardContent >
        </Card >
    )
}

export default NewPost