import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';

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

export default function ImageButton({setSelectedImage,selectedImage,text,setObejct}) {
  

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(event.target.files[0]);
      setObejct(URL.createObjectURL(event.target.files[0]))
    }
  };

  const handleDeleteImage = () => {
    setSelectedImage(null);
  };

  return (
    <Box>
      <Button
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
      >
        {text}
        <VisuallyHiddenInput type="file" onChange={handleImageChange} />
      </Button>
      {selectedImage && (
        <Box mt={2}>
    
          <Button
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
            onClick={handleDeleteImage}
          >
            Delete Image
          </Button>
        </Box>
      )}
    </Box>
  );
}
