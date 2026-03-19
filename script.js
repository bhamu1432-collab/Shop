const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const header = document.getElementById("header");

function toggleSidebar() {
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");

  if (sidebar.classList.contains("active")) {
    header.style.display = "none";
  } else {
    header.style.display = "block";
  }
}

function closeSidebar() {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
  header.style.display = "block";
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

/* Search */
function searchItems() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let cards = document.getElementsByClassName("app-card");
  let found = false;

  for (let i = 0; i < cards.length; i++) {
    let text = cards[i].innerText.toLowerCase();

    if (text.includes(input)) {
      cards[i].style.display = "block";
      found = true;
    } else {
      cards[i].style.display = "none";
    }
  }

  document.getElementById("noResult").style.display = found ? "none" : "block";
}
