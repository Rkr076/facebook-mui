import React, { useState } from 'react';
import { AppBar, InputBase, Avatar, Badge, Toolbar, Box, styled, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Topbar from './Topbar';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1rem 1rem'
})

const SearchBar = styled('div')({
  backgroundColor: 'white',
  width: '40%',
  borderRadius: '10px',
  padding: '10px 10px'
})

const Icons = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px'
});


const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Topbar />
      <AppBar position='sticky'>
        <StyledToolbar>
          <Typography variant='h5' sx={{ display: { xs: 'none', sm: 'block' } }}>Illusion Tech</Typography>
          <AddShoppingCartIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
          <SearchBar> <InputBase placeholder='search' /> </SearchBar>
          <Icons>
            <Badge badgeContent={4} color="error" sx={{ display: { xs: 'none', sm: 'block' } }}>
              <MailIcon color="white" />
            </Badge>
            <Badge badgeContent={4} color="error" sx={{ display: { xs: 'none', sm: 'block' } }}>
              <AddAlertIcon color="white" />
            </Badge>
            <Tooltip title="Rahul">
              <IconButton>
                <Avatar
                  onClick={(e) => setOpen(true)}
                  sx={{ width: '30px', height: '30px' }} src="https://plus.unsplash.com/premium_photo-1683586217674-93e919fe41e3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </IconButton>
            </Tooltip>
          </Icons>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={(e) => setOpen(false)}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </StyledToolbar>
      </AppBar>
    </>
  )
}

export default Navbar