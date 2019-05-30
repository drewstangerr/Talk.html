$(document).ready(function() {
  $("button#Cat").click(function() {
    $("ul#user").prepend("<li>Meow!</li>");
    $("ul#webpage").prepend("<li>Meow Meow!</li>");

    $("li").css("background-color", "green");
  });

  $("button#Dog").click(function() {
    $("ul#user").prepend("<li>Woof!</li>");
    $("ul#webpage").prepend("<li>Woof Woof!</li>");

    $("li").css("background-color", "green");
  });
});
