const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

function toggleSidebar() {
  sidebar.classList.add("active");
  overlay.classList.add("active");
}

function closeSidebar() {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
}

function openMap() {
  window.location.href = "https://maps.app.goo.gl/zHJByjEHvwHVsNNk9";
}

function openCategory(cat) {
  window.location.href = "products.html?cat=" + cat;
}

function goHome() {
  window.location.href = "index.html";
}

function searchItems() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let cards = document.getElementsByClassName("app-card");
  let found = false;

  for (let i = 0; i < cards.length; i++) {
    let text = cards[i].innerText.toLowerCase();

    if (text.includes(input)) {
      cards[i].style.display = "flex";
      found = true;
    } else {
      cards[i].style.display = "none";
    }
  }

  document.getElementById("noResult").style.display = found ? "none" : "block";
}
