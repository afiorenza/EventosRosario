const url = 'https://ws.rosario.gov.ar/web/api/agenda.json';

export const getEvents = () => fetch(url)
  .then(response => response.json())
  .catch(error => error);
