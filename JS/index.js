console.log("Your index.js file is loaded correctly!");

$("#myID").on("click", function() {
    console.log("You clicked on #myID");
});

(document).ready(function() {
      // Attach event listener to the image
      $(".enlarge").hover(
        function() {
          $(this).addClass("enlarge"); // Add the enlarge class on hover
        },
        function() {
          $(this).removeClass("enlarge"); // Remove the enlarge class on mouse leave
        }
      );
    });