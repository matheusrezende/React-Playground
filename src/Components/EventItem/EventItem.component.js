import './EventItem.scss'

import React from 'react'

import DetailItem from '../Common/DetailItem/DetailItem.component';
import * as Icons from '../../Constants/Icons';
import ImageBanner from '../Common/ImageBanner/ImageBanner.component';
import placeholder from '../../Assets/Images/placeholder.jpg'

const EventItem = ({event}) => (
  <div className='event-item'>
    <div className='event-item__image-wrapper'>
      <ImageBanner src={event.imageUrl || placeholder} title={event.name} />
    </div>
    <div className='event-item__details'>
      <div className='row'>
        <DetailItem
          icon={Icons.clock}
          primaryBold
          primary={event.startDate}
          secondary={`${event.startTime} - ${event.endTime}`}
        />
        <DetailItem icon={Icons.info} primary={event.location.name} />
      </div>
      <div className='row'>
        <DetailItem icon={Icons.location} primary={event.location.street} />
        <DetailItem avatar={!!event.trainerName} primary={event.trainerName} picture={event.trainerAvatar} />
        <button type='button' className='btn btn-warning event-item__button'>Zur Buchung</button>
      </div>
      <span className='event-item__description'>Yoga fur Einsteiger: Sie haben bisher keine oder wenig Erfahrung mit Yoga? Kein Problem und herzlich</span>
    </div>
  </div>
)

EventItem.defaultProps = {
  event: {},
}

export default EventItem
