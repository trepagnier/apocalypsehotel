import getData from "app/functions/getData";

const getWikiUrl = title =>
  `https://en.wikipedia.org/api/rest_v1/page/summary/${title}?redirect=true" -H "accept: application/json; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/Summary/1.3.7`;

export default title => getData(getWikiUrl(title));
