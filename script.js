// Load products
fetch("data.json")
.then(res => res.json())
.then(data => {
  let output = "";

  data.products.forEach(p => {
    output += `
      <div class="card">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>${p.price}</p>
        <a href="product.html?id=${p.id}" class="ripple-btn">View</a>
      </div>
    `;
  });

  document.getElementById("products").innerHTML = output;

  addRipple();
});

// Ripple function
function addRipple() {
  document.querySelectorAll(".ripple-btn").forEach(button => {
    button.addEventListener("click", function(e) {

      const ripple = document.createElement("span");
      ripple.classList.add("ripple");

      const rect = this.getBoundingClientRect();

      ripple.style.left = (e.clientX - rect.left) + "px";
      ripple.style.top = (e.clientY - rect.top) + "px";
      ripple.style.width = ripple.style.height = "100px";

      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  });
}
