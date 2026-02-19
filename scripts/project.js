const year = new Date().getFullYear();
document.getElementById("year").textContent = year;


document.getElementById("lastModified").textContent = document.lastModified;

/* i want to calculate the number of panels */


  const form = document.getElementById('panelForm');
  const result = document.getElementById('result');

  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);

    
    if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
      result.textContent = "Please enter valid positive numbers for length and width.";
      return;
    }

    /* Calculate required panels*/
    const panels = Math.ceil((length * width) / 3,6); 

    /* result*/
    result.textContent = `You will need approximately ${panels} solar panels for your pool.`;
  });
