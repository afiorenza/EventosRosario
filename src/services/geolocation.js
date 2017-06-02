const apiKey = 'AIzaSyB45capgUltzIpFM5ULcBt23435Alvlq6U';
const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=';

export const getGeolocation = (street, height) => fetch(`${url}${street}+${height}+rosario&key=${apiKey}`)
  .then(response => response.json())
  .catch(error => console.log(error));
