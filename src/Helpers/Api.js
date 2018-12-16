import axios from 'axios'

import {getUrl} from './UrlHelper';

export const get = (url, params, query) => axios.get(getUrl(process.env.REACT_APP_API_BASE_URL + url, params, query))
