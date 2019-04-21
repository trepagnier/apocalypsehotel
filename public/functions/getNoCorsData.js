const proxyUrl = "https://cors-anywhere.herokuapp.com/";
export default url =>
  fetch(`${proxyUrl}${url}`)
    .then(blob => blob.json())
    .then(data => {
      return data;
    })
    .catch(e => {
      console.log(e);
      return e;
    });
