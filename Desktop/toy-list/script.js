const toys = ["მანქანა", "თოჯინა", "ტყლარწი"];
const lists = document.getElementById("lists");
const toyInput = document.getElementById("input");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addToys();
});

function renderToys(e) {
  lists.innerHTML = "";

  toys.forEach((toy) => {
    const li = document.createElement("li");
    li.textContent = toy;
    lists.appendChild(li);
  });
}

function addToys() {
  const inpValue = toyInput.value.trim();
  if (inpValue === "") {
    alert("Field is empty");
  } else {
    toys.push(toyInput.value);
    toyInput.value = "";
  }

  renderToys();
}

renderToys();
