import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Box} from '@mui/material';

const Topbar = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
           <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
                <Tab icon={<HomeIcon />} aria-label="phone" />
                <Tab icon={<OndemandVideoIcon />} aria-label="favorite" />
                <Tab icon={<PeopleOutlineIcon />} aria-label="person" />
                <Tab icon={<StorefrontIcon />} aria-label="store" />
                <Tab icon={<NotificationsNoneIcon />} aria-label="notifications" />
            </Tabs>
        </Box>
    )
}

export default Topbar