const year = new Date().getFullYear();
document.getElementById("year").textContent = year;
document.getElementById("lastModified").textContent = document.lastModified;




const products = [
  { id: "p1", name: "Solar Panel 400W" },
  { id: "p2", name: "Solar Panel 300W" },
  { id: "p3", name: "Solar Pool Heater" },
  { id: "p4", name: "Heat Pump 2000" },
  { id: "p5", name: "Solar Water Pump" }
];


const productSelect = document.getElementById("product");


products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;    
  option.textContent = product.name; 
  productSelect.appendChild(option);
});


let reviewCount = localStorage.getItem("reviewCount");


if (!reviewCount) {
  reviewCount = 0;
} else {
  // Converting string to number
  reviewCount = parseInt(reviewCount);
}

reviewCount++;

// I am saving  the new value back to localStorage
localStorage.setItem("reviewCount", reviewCount);

// Then now i want to isplay the count on the page
const counterElement = document.getElementById("reviewCounter");
if (counterElement) {
  counterElement.textContent = `Total Reviews Submitted: ${reviewCount}`;
}
