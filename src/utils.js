import axios from "axios";
import { googleMapsConfig } from "../config/index";
import geolib from "geolib";

export const getCoords = address => {
  return axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${address}+CA&key=${
      googleMapsConfig.apiKey
    }`
  );
};

export const findLocals = (arr, home) => {
  const locals = arr.filter(item => {
    return geolib.isPointInCircle(
      { latitude: item.lat, longitude: item.long },
      { latitude: home.lat, longitude: home.long },
      8400
    );
  });
  return locals;
};
