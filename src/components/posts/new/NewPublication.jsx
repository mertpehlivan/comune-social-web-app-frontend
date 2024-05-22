import { Delete } from '@mui/icons-material'
import { Button, Card, CardMedia, Stack } from '@mui/material'
import React from 'react'

const NewPublication = ({selectedFiles,handleRemoveFile,object}) => {
    return (
        <Stack direction="row" spacing={1} sx={{ overflowX: "auto" }}>
            
            {selectedFiles.map((file, index) => (

                <Card key={index} sx={{ maxWidth: 150 }}>
                    <CardMedia
                        component={file.type.startsWith('image') ? 'img' : 'video'}
                        src={URL.createObjectURL(file)}
                        controls={file.type.startsWith('video')}
                        sx={{ height: 100 }}
                    >

                    </CardMedia>
                    <Button
                        aria-label="remove"
                        onClick={() => handleRemoveFile(index)}
                        variant='outlined'
                        fullWidth
                    >
                        <Delete />
                    </Button>
                </Card>


            ))}
        </Stack>
  )
}

export default NewPublication