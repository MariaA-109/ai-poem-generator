function displayPoem(response) {
  console.log("displaying poem");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 75,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#instructions");

  let apiKey = "2tabfa1b3493b3360bob9a9a0c14ec98";
  let prompt = `Generate a poem about ${instructionsInput.value}`;
  let context =
    "You are a romantic AI assistant that helps people write poems. Please generate a short, friendly, 4-sentence poem in HTML about a specific topic. Each line should be separated with a <br> tag. Do not include any title or author name.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`${prompt}`);
  console.log(`${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.getElementById("poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
