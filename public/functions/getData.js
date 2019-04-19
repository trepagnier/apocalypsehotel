export default url =>
  new Promise(topRes => {
    fetch(url, {
      headers: {
        "User-Agent": "http://darinacosta.com"
      }
    })
      .then(res => res.json())
      .then(data => {
        topRes(data);
      });
  });
