function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("active");
  document.getElementById("overlay").classList.toggle("active");
}

function closeSidebar() {
  document.getElementById("sidebar").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
}

/* Open your real shop location */
function openMap() {
  window.open("https://maps.app.goo.gl/zHJByjEHvwHVsNNk9", "_blank");
}
