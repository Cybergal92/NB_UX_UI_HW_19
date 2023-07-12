console.log("Your index.js file is loaded correctly!");

$("#myID").on("click", function() {
    console.log("You clicked on #myID");
});

(document).ready(function() {
    // Attach event listener to the image
    $(".enlarge").hover(
      function() {
        $(this).circleimage("enlarge"); // Add the enlarge class on hover
      },
      function() {
        $(this).circleimage("enlarge"); // Remove the enlarge class on mouse leave
      }
    );
  });