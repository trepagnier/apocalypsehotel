export default id =>
  `locations/${id}?fields[]=countryName&fields[]=countryCode&fields[]=fullName&` +
  `fields[]=hotelCount&fields[]=name&fields[]=regionName&fields[]=lat&fields` +
  `[]=lng&fields[]=geometry&fields[]=id`;
