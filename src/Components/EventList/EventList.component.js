import React from 'react'
import BeatLoader from 'react-spinners/BeatLoader';
import _ from 'lodash'
import EventItem from '../EventItem/EventItem.container';
import './EventList.scss'

export default ({events, loading}) => (
  <div className='event-list'>
    {
      _.isEmpty(events) || loading
        ? (
          <div className='event-list__loading-wrapper'>
            <BeatLoader />
          </div>
        )
        : events.map((item, index) => <EventItem key={index} event={item} />)
    }
    
  </div>
)
