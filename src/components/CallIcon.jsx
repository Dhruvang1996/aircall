import React from 'react';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import CallMadeIcon from '@mui/icons-material/CallMade';
import CallMissedIcon from '@mui/icons-material/CallMissed';
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';
import VoicemailIcon from '@mui/icons-material/Voicemail';

const CallIcon = ({ activity }) => {
  return (
    <div 
      style={{
        display: 'flex',
        width: '2em',
        justifyContent: 'center',
        color: 'black' 
      }}
    >
        {
          activity.call_type === 'answered' &&
          <div>
            {
              activity.direction === 'inbound' ?
              <CallReceivedIcon />
              :
              <CallMadeIcon />
            }
          </div>
        }
        {
          activity.call_type === 'missed' &&
          <div>
            {
              activity.direction === 'inbound' ?
              <CallMissedIcon />
              :
              <CallMissedOutgoingIcon />
            }
          </div>
        }
        {
          activity.call_type === 'voicemail' &&
          <VoicemailIcon />
        }
      </div>
  );
};

export default CallIcon;
