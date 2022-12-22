const URL = "https://api.blockdate.io/api/now.json";

async function makeAPICall() {
  const result = await fetch(URL);
  result.json().then((data) => {
    document.getElementById("block").innerHTML = data.blockdate.block;
  });
}

makeAPICall();
