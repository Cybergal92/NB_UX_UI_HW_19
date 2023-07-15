console.log("Your index.js file is loaded correctly!");
  
    $("#myID").on("hover", function() {
      console.log("You clicked on #myID");
    });
    
  // Get all accordion headers
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  // Attach click event listeners to each accordion header
  accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      // Toggle active class on the clicked accordion
      this.parentElement.classList.toggle('active');

      // Toggle display of accordion content
      const content = this.nextElementSibling;
      if (content.style.display === 'block') {
        content.style.display = 'none';
      } else {
        content.style.display = 'block';
      }
    });
  });
 