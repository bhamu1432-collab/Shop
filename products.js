const params = new URLSearchParams(window.location.search);
const cat = params.get("cat");

document.getElementById("title").innerText = cat.toUpperCase();

const products = {
  balloon: ["Red Balloon", "Blue Balloon"],
  cake: ["Cake Topper 1", "Cake Topper 2"],
  candle: ["Number Candle", "Magic Candle"],
  backdrop: ["Birthday Backdrop"],
  curtain: ["LED Curtain"],
  led: ["Fairy Lights"],
  wedding: ["Wedding Decor"],
  foil: ["Foil Heart"],
  banner: ["Birthday Banner"],

  flag: ["India Flag"],
  hanging: ["Flower Hanging"],
  rangoli: ["Color Rangoli"],
  toran: ["Door Toran"],
  mala: ["Flower Mala"],
  bunting: ["Party Bunting"]
};

let list = document.getElementById("productList");

if (products[cat]) {
  products[cat].forEach(item => {
    let div = document.createElement("div");
    div.className = "app-card";
    div.innerHTML = `<p>${item}</p>`;
    list.appendChild(div);
  });
} else {
  list.innerHTML = "<p>No products found</p>";
}
