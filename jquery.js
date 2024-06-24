$("#game").ready(function () {
  const p4 = new P4("#game", 7, 6, "yellow", "red", "Player 1", "Player 2");

  $("#restart").on("click", function () {
    $("#game").empty();
    p4.drawGame();
    $("#restart").css("visibility", "hidden");
  });
});
