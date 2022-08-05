fetch("./assets/js/grep-styles.json")
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
    <div class="grid__5-7"><code class="code">${grepStyle.find}</code></div>
    <div class="grid__7-9"><code class="code">${grepStyle.replace}</code></div>
    `;

    const parent = document.getElementById("grepStyles_common");
    parent.appendChild(description);
  }
}