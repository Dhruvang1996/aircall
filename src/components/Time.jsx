import React from 'react';
import moment from 'moment';

const Time = ({ activity }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexGrow: '1',
        justifyContent: 'flex-end',
        color: 'black',
        paddingRight: '0.5em'
      }}
    >
      {moment(activity.created_at).format('LT')}
    </div>
  );
};

export default Time;
