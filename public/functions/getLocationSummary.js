import getWikiSummary from "app/functions/getWikiSummary";

const hotelDescriptor = "encampment";
const getHotelDescriptor = nounType =>
  nounType.startsWith("s") ? hotelDescriptor : `${hotelDescriptor}s`;

export default (loc, hotelCount) =>
  new Promise(res => {
    const wikiSearch = loc.split(",")[0];
    getWikiSummary(wikiSearch).then(summary => {
      let description = `${summary.extract.toPastTense()}<br><br>
      There are ${hotelCount} ${getHotelDescriptor("p")} located here.`;

      if (summary.type === "disambiguation") {
        description = `There are ${hotelCount} ${getHotelDescriptor(
          "p"
        )} located in the locality once called "${wikiSearch}".`;
      }

      res({
        title: `Lost City of ${summary.displaytitle}`,
        description
      });
    });
  });
