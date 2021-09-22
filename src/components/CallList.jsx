import 'regenerator-runtime/runtime';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getAllActivity } from '../services/apiServices.js';
import { setActivities } from '../redux/reducer/reducer';
import CallItem from './CallItem.jsx';

const CallList = () => {
  const dispatch = useDispatch();
  const activityList = useSelector(state => state.activities.activities);
  const [activity, setActivity] = useState([]);
  
  useEffect(async () => {
    const allActivity = await getAllActivity();
    dispatch(setActivities(allActivity));
    setActivity(activityList);
  }, [activityList]);

  return (
    <div>
        {
          activity.length ? activity.map((activity, index) => 
            <Link to={`/${activity.id}`} key={index} style={{textDecoration: 'none', cursor: 'default'}}>
              <CallItem  
                activity = { activity }
              />
            </Link>
          ) : <h3>No activities to show.</h3>
        }
    </div>
  );
};

export default CallList;
