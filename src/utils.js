import axios from 'axios'
import { googleMapsConfig } from '../config/index'

 function getCoords(address) {

    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}+CA&key=${googleMapsConfig.apiKey}`);

} 

export default getCoords

