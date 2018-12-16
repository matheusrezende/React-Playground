import {mapProps} from 'recompose';
import moment from 'moment';

import EventItemComponent from './EventItem.component';


export default mapProps((props) => ({
  ...props,
  event: {
    ...props.event,
    startDate: moment(props.event.startDateTime).format('DD. MMM. YYYY'),
    startTime: moment(props.event.startDateTime).format('HH:mm'),
    endTime: moment(props.event.endDateTime).format('HH:mm'),
    imageUrl: props.event.eventGroup.imageUrl,
    trainerAvatar: props.event.trainers && props.event.trainers[0] && props.event.trainers[0].imageUrl,
    trainerName: props.event.trainers && props.event.trainers[0] && props.event.trainers[0].name,
  },
}))(EventItemComponent)
