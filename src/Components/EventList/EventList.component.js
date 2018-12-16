import React from 'react'

import EventItem from '../EventItem/EventItem.container';
import './EventList.scss'


export default ({events, page, changePage}) => (
  <div className='event-list'>
    {events.map((item, index) => (
      <EventItem key={index} event={item} />
    ))}
    <div className='event-list__pagination'>
      {
        // dont show in case the user is in the first page
        page > 1 && (
          <button className='event-list__pagination__button' type='button' onClick={() => changePage(page - 1)}>
            {'<< '}
        Previous
          </button>
        )}
      <span>|</span>
      {
        // the default page size is 10, so if theres less then ten items it means we are on the last page
        events.length === 10 && (
          <button className='event-list__pagination__button' type='button' onClick={() => changePage(page + 1)}>
          Next
            {' >>'}
          </button>
        )
      }
      
    </div>
  </div>
)
