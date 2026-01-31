

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("modified").textContent = document.lastModified;


const temp = 8; 
const windSpeed = 12; 

document.getElementById("temp").textContent = temp;
document.getElementById("wind").textContent = windSpeed;

function calculateWindChill(t, v) {
  return (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1);
}

let windChill = "N/A";

if (temp <= 10 && windSpeed > 4.8) {
  windChill = calculateWindChill(temp, windSpeed) + " °C";
}

document.getElementById("chill").textContent = windChill;
