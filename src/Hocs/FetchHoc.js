import {compose, withHandlers, withStateHandlers} from 'recompose';
import * as Api from '../Helpers/Api'

export default compose(
  withStateHandlers({
    success: false,
    loading: false,
    result: null,
    hasError: false,
    error: null,
  }, {
    onStart: () => () => ({
      loading: true,
    }),
    onSuccess: () => (response) => ({
      result: response.data,
      success: true,
      loading: false,
    }),
    onError: () => (error) => ({
      hasError: true,
      error,
      loading: false,
    }),
  }),
  withHandlers({
    fetch: ({onStart, onSuccess, onError}) => (url, params, query) => {
      onStart()
      return Api.get(url, params, query)
        .then(onSuccess)
        .then(onError)
    },
  }),
)
