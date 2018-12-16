import _ from 'lodash'
import qs from 'qs'

export const getUrl = (url, params, query) => {
  let uri
  if (_.isEmpty(params) && _.isEmpty(query)) {
    return url
  }

  if (params) {
    uri = routeReplacer(url, params)
  }

  if (query) {
    uri += `?${qs.stringify(query)}`
  }
      
  return uri
}


export const routeReplacer = (string, data) => Object.keys(data).reduce((str, item) => str.replace(`:${item}`, data[item]), string)
