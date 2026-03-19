// MENU
function openMenu() {
  document.getElementById("menu").classList.add("active");
}

function closeMenu() {
  document.getElementById("menu").classList.remove("active");
}

// PRODUCTS
const products = [
  {
    id:1,
    name:"Birthday Decoration",
    img:"https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da"
  },
  {
    id:2,
    name:"Anniversary",
    img:"https://images.unsplash.com/photo-1529636798458-92182e662485"
  }
];

let output="";
products.forEach(p=>{
  output+=`
  <div class="card">
    <img src="${p.img}">
    <h3>${p.name}</h3>
    <a href="#" class="ripple-btn">View</a>
  </div>`;
});
document.getElementById("products").innerHTML=output;

// RIPPLE
document.addEventListener("click", function(e){
  if(e.target.classList.contains("ripple-btn")){
    const ripple=document.createElement("span");
    ripple.classList.add("ripple");

    const rect=e.target.getBoundingClientRect();
    ripple.style.left=(e.clientX-rect.left)+"px";
    ripple.style.top=(e.clientY-rect.top)+"px";
    ripple.style.width="100px";
    ripple.style.height="100px";

    e.target.appendChild(ripple);

    setTimeout(()=>ripple.remove(),600);
  }
});
