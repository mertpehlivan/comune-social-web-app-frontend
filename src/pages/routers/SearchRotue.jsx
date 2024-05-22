import { Search } from '@mui/icons-material'
import { Button, ButtonGroup, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const SearchRotue = () => {
    const [current,setCurrent] = useState("Community")
    const handleChange = (value) =>{
        setCurrent(value)
    }
    return (
        <Stack spacing={1} mt={2}>
            <Paper elevation={3}>
                <Stack direction="row" p={1}>
                    <TextField size='small' fullWidth placeholder='search events, communitys' />
                    <Button variant='contained' startIcon={<Search />}>Search</Button>
                </Stack>
            </Paper>
            <Paper elevation={3}>
                <Stack direction="row" p={1}>
                    <ButtonGroup fullWidth>
                        <Button sx={{ opacity: current == "Events" && 0.4}} onClick={()=>handleChange("Community")}>Community</Button>
                        <Button  sx={{ opacity: current == "Community" && 0.4}} onClick={()=>handleChange("Events")} >Events</Button>
                    </ButtonGroup>
                </Stack>
            </Paper>
            <Paper elevation={3}>

                <Stack p={4}>
                    <Stack direction="row">
                        <Typography variant='h5'>Search</Typography>
                        <Search />
                    </Stack>
                    <Stack direction="row" p={1}>
                        <Typography>
                            Web sitenizin arama sayfası, ziyaretçilerin etkinlikler ve topluluk hakkında bilgi bulabileceği bir platformdur. Etkinlikler bölümünde, yaklaşan etkinliklerin tarihleri, konuları ve katılımcılar için önemli detaylar bulunur. Topluluk kısmında ise, ilgi alanlarına göre gruplar, forumlar veya diğer etkileşim alanlarına yönlendirme yapılır. Bu sayede ziyaretçiler, ilgi duydukları konularda bilgi alabilir, diğer katılımcılarla etkileşimde bulunabilir ve topluluk içinde aktif rol alabilirler.
                        </Typography>
                    </Stack>
                </Stack>
            </Paper>

        </Stack>
    )
}

export default SearchRotue