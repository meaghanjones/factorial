$(document).ready(function() {
  $("button").click(function() {
    var number = parseInt($("#number").val());
    if (!number) {
      alert("You did it wrong.");
    } else if (number <= 0) {
      alert("Can't have a negative number.");
    }
    for (var counter = number - 1; counter > 1; counter -= 1) {
      number *= counter
      $(".output ul").append("<li>" + number + "</li>");
    }
  });
});
