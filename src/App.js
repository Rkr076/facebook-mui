import Sidebar from "./components/Sidebar";
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Box from '@mui/material/Box';
import Navbar from './components/Navbar';
import Stack from '@mui/material/Stack';


function App() {

  return (
    <Box>
        <Navbar />
        <Stack direction='row' spacing={2} justifyContent='space-between'>
          <Sidebar />
          <Feed />
          <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
