import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import DialpadIcon from '@mui/icons-material/Dialpad';

const BottomNavBar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
      <Tab icon={<PhoneIcon />} style={{minWidth:"74px"}}/>
      <Tab icon={<PersonIcon />} style={{minWidth:"74px"}}/>
      <Tab icon={<DialpadIcon />} style={{minWidth:"120px"}}/>
      <Tab icon={<SettingsApplicationsIcon />} style={{minWidth:"74px"}}/>
      <Tab icon={<SettingsBackupRestoreIcon />} style={{minWidth:"74px"}}/>
    </Tabs>
  );
};

export default BottomNavBar;
