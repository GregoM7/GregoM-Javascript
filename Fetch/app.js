//https://apipheny.io/free-api/

const fetch = require("node-fetch");

const text = fetch("https://catfact.ninja/fact")
  .then((res) => res.json())
  .then((json) => {

    const text = json.fact;
    console.log(text + "\n");

    fetch("https://libretranslate.de/translate", {
      method: "POST",
      body: JSON.stringify({
        q: text,
        source: "en",
        target: "es",
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => console.log(json.translatedText));
  });