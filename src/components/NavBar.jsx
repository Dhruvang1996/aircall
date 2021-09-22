import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import CallIcon from '@mui/icons-material/Call';

const NavBar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs sx={{ bgcolor: '#e9e9e9'}} TabIndicatorProps={{style: {background:'Red'}}} 
        value={value} onChange={handleChange} centered>
          <Tab label={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CallIcon style={{color: '#2ac420', border: 'solid', borderRadius: '50%', padding: '3px'}}/>
              <div style={{ paddingLeft: '10px', fontWeight: 'bold' }}>Activity</div>
            </div>} 
            style={{color: 'black'}} to='/' LinkComponent={Link}/>
          <Tab label="Inbox" style={{color: 'black', fontWeight: 'bold'}} to='/inbox' LinkComponent={Link}/>
          <Tab label="All calls" style={{color: 'black', fontWeight: 'bold'}} to='/allCalls' LinkComponent={Link}/>
          <Tab icon={<FilterAltIcon />} style={{color: 'black', minWidth: 'min-content'}} to='/filter' LinkComponent={Link}/>
      </Tabs>
    </Box>
  );
}

export default NavBar;
