import getWikiSummary from "app/functions/getWikiSummary";

const hotelDescriptor = "encampment";
const getHotelDescriptor = nounType =>
  nounType.startsWith("s") ? hotelDescriptor : `${hotelDescriptor}s`;

export default (wikiSearch, hotelCount) =>
  new Promise(res => {
    getWikiSummary(wikiSearch).then(summary => {
      let description = "";

      // If there's trouble finding a Wikipedia entry,
      // just serve up Roomkey data.
      if (
        summary.type === "disambiguation" ||
        summary.type.indexOf("not_found") > -1
      ) {
        description = `There are ${hotelCount} ${getHotelDescriptor(
          "p"
        )} located in the locality once called "${wikiSearch.split("%")[0]}".`;
      } else {
        description = `${summary.extract.toPastTense()}<br><br>
        There are ${hotelCount} ${getHotelDescriptor("p")} located here.`;
      }

      res({
        title: `Lost City of ${wikiSearch.split("%")[0]}`,
        description
      });
    });
  });
