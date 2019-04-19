const proxyUrl = "https://cors-anywhere.herokuapp.com/";
export default url =>
  fetch(`${proxyUrl}${url}`)
    .then(blob => blob.json())
    .then(data => {
      console.table(data);
      document.querySelector("pre").innerHTML = JSON.stringify(data, null, 2);
      return data;
    })
    .catch(e => {
      console.log(e);
      return e;
    });
