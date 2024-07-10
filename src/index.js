function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "This is a poem!",
    autoStart: true,
    delay: 75,
    cursor: "",
  });
}

let poemFormElement = document.getElementById("poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
