fetch("./assets/js/automatisation-scripts.json")
  .then((response) => response.json())
  .then((data) => setup(data));

function setup(data) {
  dataset = [...data];

  for (let i = 0; i < data.length; i++) {
    const grepStyle = data[i];

    const description = document.createElement("div");
    description.setAttribute("class", 'grep-style');

    description.innerHTML += `
    <div class="description">${grepStyle.description}</div>
    <div class="code">${grepStyle.code}</div>
    <div class="copy">&#128203;</div>
    `;

    const parent = document.getElementById("grepStyles_common");
    parent.appendChild(description);
  }
}