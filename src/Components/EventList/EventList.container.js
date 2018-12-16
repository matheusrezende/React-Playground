import {compose, lifecycle, mapProps} from 'recompose';

import {PROVIDER_PUBLIC_EVENTS} from '../../Constants/ApiUrl';
import EventListComponent from './EventList.component';
import FetchHoc from '../../Hocs/FetchHoc';

export default compose(
  FetchHoc,
  lifecycle({
    componentDidMount() {
      this.props.fetch(PROVIDER_PUBLIC_EVENTS, {provider: process.env.REACT_APP_EVENT_PROVIDER}, {
        from: new Date(),
        page: 1,
        pageSize: 10,
      })
    },
  }),
  mapProps((props) => ({...props, events: props.result})),
)(EventListComponent)
