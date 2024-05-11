import { Box } from '@mui/material'
import React, { useState } from 'react'

const Banner = () => {
    const [type, setType] = useState()
    
    return type == "img" ? <Box></Box> : <Box></Box>

}

export default Banner