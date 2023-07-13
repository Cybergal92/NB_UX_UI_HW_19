$(document).ready(function() {
    console.log("Your index.js file is loaded correctly!");
  
    $("#myID").on("hover", function() {
      console.log("You clicked on #myID");
    });
  
    $(".IMAGE").on("hover",
      function() {
        $(this).addClass("enlarge"); // Add the enlarge class on hover
      }
    );
  });