document.addEventListener("DOMContentLoaded", function () {

  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  // Open Sidebar
  window.toggleSidebar = function () {
    if (sidebar && overlay) {
      sidebar.classList.add("active");
      overlay.classList.add("active");
    }
  };

  // Close Sidebar
  window.closeSidebar = function () {
    if (sidebar && overlay) {
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
    }
  };

  // Open Google Map
  window.openMap = function () {
    window.location.href = "https://maps.app.goo.gl/zHJByjEHvwHVsNNk9";
  };

  // Open Category Page
  window.openCategory = function (cat) {
    window.location.href = "products.html?cat=" + encodeURIComponent(cat);
  };

  // Go Home
  window.goHome = function () {
    window.location.href = "index.html";
  };

  // Search Function
  window.searchItems = function () {
    const input = document.getElementById("searchInput");
    const cards = document.querySelectorAll(".app-card");
    const noResult = document.getElementById("noResult");

    if (!input) return;

    let filter = input.value.toLowerCase().trim();
    let found = false;

    cards.forEach(card => {
      let text = card.innerText.toLowerCase();

      if (text.includes(filter)) {
        card.style.display = "flex"; // important
        found = true;
      } else {
        card.style.display = "none";
      }
    });

    if (noResult) {
      noResult.style.display = found ? "none" : "block";
    }
  };

});
