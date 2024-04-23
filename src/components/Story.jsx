import React, { useState } from 'react';
import CardMedia from '@mui/material/CardMedia';
import { Stack, Typography, styled } from '@mui/material';
import Fab from '@mui/material/Fab';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Card from '@mui/material/Card';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import MoodIcon from '@mui/icons-material/Mood';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import ImageIcon from '@mui/icons-material/Image';
import Button from '@mui/material/Button';


const Stylemodal = styled(Modal)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

})


const Story = () => {
    const [open, setOpen] = useState(false);                    
    return (
        <>
            <Stack direction='row' spacing={2} mb={2}>
                <Card sx={{ maxWidth: 345, boxShadow: ' rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
                    <CardMedia
                        component="img"
                        height="194"
                        image="https://images.unsplash.com/photo-1712260547533-e3e6a0ed7139?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Paella dish"
                    />
                    <Fab color="primary" aria-label="add" sx={{ position: 'relative', left: '30%', top: '-25px' }} onClick={(e) => setOpen(true)}>
                        <AddIcon />
                    </Fab>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary" fontWeight={500}>
                            Create story
                        </Typography>
                    </CardContent>
                </Card>
                <Stylemodal
                    open={open}
                    onClose={(e) => setOpen(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box width={400} height={320} p={2} borderRadius={8} bgcolor='white'>
                        <Stack direction="row" spacing={10} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <Fab color="primary" aria-label="add">
                                <CloseIcon />
                            </Fab>
                            <Typography variant="h6" color="secondary" fontWeight={500}>
                                Create story
                            </Typography>
                            <Fab color="primary" aria-label="add">
                                <CameraAltIcon />
                            </Fab>
                        </Stack>
                        <Stack direction='column' spacing={1} mt={2} >
                            <Typography fontWeight={500} p={2}  color='grey' fontSize={20} variant='span'>What's in your mind </Typography>
                            <TextField
                                id="filled-multiline-flexible"
                                multiline
                                rows={3}
                                variant="standard"
                            />
                        </Stack>
                        <Stack direction='row' spacing={1} mt={2} mb={2}>
                            <MoodIcon />
                            <VideoCallIcon />
                            <ImageIcon />
                            <MoodIcon />
                        </Stack>
                        <Button variant="contained">Post</Button>
                    </Box>
                </Stylemodal>
            </Stack>
        </>
    )
}

export default Story