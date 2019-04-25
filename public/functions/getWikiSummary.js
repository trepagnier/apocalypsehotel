import getData from "app/functions/getData";

const getWikiUrl = title =>
  `https://en.wikipedia.org/api/rest_v1/page/summary/${title}?redirect=true`;

export default title => getData(getWikiUrl(title));
