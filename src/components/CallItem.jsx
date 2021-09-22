import React from 'react';
import BasicCallDetails from './BasicCallDetails.jsx';
import CallIcon from './CallIcon.jsx';
import Time from './Time.jsx';

const CallItem = ({ activity }) => {

  return (
    <div
      style={{ 
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        border: 'solid 0.1em lightGray',
        borderRadius: '0.4em',
        margin: '0.3em',
        padding: '0.5em 0',
      }}
    >
      <CallIcon activity={activity} />
      <BasicCallDetails activity={activity} />
      <Time activity={activity} />
    </div>
  );
};

export default CallItem;