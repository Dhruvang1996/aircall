import React from 'react';

const BasicCallDetails = ({ activity }) => {
  return (
    <div
      style={{
        maxWidth: '13em',
        maxHeight: '3em',
        padding: '0 1.5em',
      }}
      >
      {
        activity.direction === 'inbound' ?
        <div>
          <p
            style={{
              fontWeight: 'bold',
              fontSize: '1.3em',
              color: '#555555',
              padding: '0.2em',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
            >
            {activity.from}
          </p>
          <p
            style={{
              fontSize: '1em',
              color: 'grey',
              padding: '0.2em',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
            >
            {
              activity.to ?
              <span>called to {activity.to}</span> :
              <span>called via {activity.via}</span>
            }
          </p>
        </div>
        :
        <div>
          <p
            style={{
              fontWeight: 'bold',
              fontSize: '1.3em',
              color: '#555555',
              padding: '0.2em',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
            >
            {activity.to}
          </p>
          <p
            style={{
              fontSize: '1em',
              color: 'grey',
              padding: '0.2em',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
            >
            {
              activity.from ?
              <span>called from {activity.from}</span> :
              <span>called via {activity.via}</span>
            }
          </p>
        </div>
      }
    </div>
  );
};

export default BasicCallDetails;
