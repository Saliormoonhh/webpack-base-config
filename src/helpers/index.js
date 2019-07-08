import axios from 'axios';
import {url, GET_TEMPERATURE_DATA} from '&static/url';

export function getTemperatureData () {
  console.log(url+GET_TEMPERATURE_DATA);
  return axios.get(url+GET_TEMPERATURE_DATA);
}