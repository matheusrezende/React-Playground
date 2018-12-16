import {
  branch,
  compose,
  lifecycle,
  mapProps,
  renderComponent,
  withHandlers,
  withStateHandlers,
} from 'recompose';
import _ from 'lodash'

import {PROVIDER_PUBLIC_EVENTS} from '../../Constants/ApiUrl';
import EventListComponent from './EventList.component';
import FetchHoc from '../../Hocs/FetchHoc';
import Loading from '../Common/Loading/Loading.component';

export default compose(
  FetchHoc,
  withStateHandlers({
    page: 1,
  }, {
    changePage: () => (page) => ({
      page,
    }),
  }),
  withHandlers({
    doRequest: ({fetch, page}) => () => {
      /* eslint-disable */
      fetch(PROVIDER_PUBLIC_EVENTS, {provider: process.env.REACT_APP_EVENT_PROVIDER}, {
        from: new Date(),
        page,
        pageSize: 10,
      })
      /* eslint-enable*/
    },
  }),
  lifecycle({
    componentDidMount() {
      this.props.doRequest()
    },
    componentWillReceiveProps(nextProps) {
      if (nextProps.page !== this.props.page) {
        this.props.doRequest()
      }
    },
  }),
  // maps the result props created by the fetch hoc to the event prop
  mapProps((props) => ({...props, events: props.result})),
  // use branch to do conditional rendering of the loading component
  branch(
    ({events, loading}) => _.isEmpty(events) || loading,
    renderComponent(Loading),
  ),
)(EventListComponent)
