import React from 'react';
import Box from '@mui/material/Box';
import Post from './Post';
import Story from './Story';


const Feed = () => {
  return (
    <Box flex={4} p={2}>
       <Story />
       <Post title='Rahul kumar' img='https://plus.unsplash.com/premium_photo-1679434184867-a294eb85400c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
       <Post title='Shikha muskan' img='https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
       <Post title='Shantanu shubham' img='https://images.unsplash.com/photo-1505935428862-770b6f24f629?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    </Box>
  )
}

export default Feed