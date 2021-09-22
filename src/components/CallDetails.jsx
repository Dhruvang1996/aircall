import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { getActivity, postArchieve } from '../services/apiServices';
import CallIcon from './CallIcon.jsx';
import { setArchieveActivities } from '../redux/reducer/reducer';

const CallDetails = ({ match }) => {
  
  const [details, setDetails] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    getDetails(match.params.id);
  }, []);


  const getDetails = async (id) => {
    const callData = await getActivity(id);
    setDetails(callData);
  };

  const handleSubmit = async () => {
    const data = await postArchieve(details.id);
    dispatch(setArchieveActivities(data));
  }

  return (
    <div
      style={{
        border: 'solid 0.1em grey',
        borderRadius: '0.8em',
        padding: '1em 0',
      }}
    >
      <div 
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          fontSize: 'x-large',
        }}
      >
        <CallIcon activity={details} />
        <strong>
          {details.direction === 'inbound' ? details.from : details.to}
        </strong>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          padding: '1em'
        }}
      >
        {details.direction === 'inbound' ? 'Incoming' : 'Outgoing'},
        <p>Call Duration: {details.duration/60} min</p>
      </div>
      <p
        style={{
          padding: '1em'
        }}
      >
        {moment(details.created_at).format('MMMM Do, h:mm a')}
      </p>
      <button 
        onClick={handleSubmit} 
        style={{margin: '1em 1em 0 1em'}}
      >
        <Link to='/' style={{textDecoration: 'none', color: 'black', backgroundColor:'#e9e9e9'}}>
          Add to Archieve
        </Link>
      </button>
    </div>
  );
};

export default CallDetails;
