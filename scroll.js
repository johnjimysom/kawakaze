//When clicked on a div, the pages scrolls towards it

$("button").click(function() {
  $("html,body").animate(
    {
      scrollTop: $(".about").offset().top
    },
    "slow"
  );
});

function showDiv() {
  document.getElementById("welcomeDiv").style.display = "block";
}
