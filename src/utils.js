import axios from 'axios'

const api = 'AIzaSyBoKaEHpAaSVqM3mHggf0nlerwLKWutg7A'

 function getCoords(address) {

    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}+CA&key=${api}`);

} 

export default getCoords

