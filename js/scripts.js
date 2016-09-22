
//Front End logic
$(document).ready(function(event) {
  $("form#survey").submit(function() {
    var favoriteSeason = $("input:radio[name=season]:checked").val();
    var favoriteActivity = $("#activity").val();
    var favoriteDrink = $("#drink").val();
    var ringResponse = $("#ring").val();
    var favoriteCompanion = $("input:radio[name=companion]:checked").val();
      alert( favoriteSeason  +" "+ favoriteActivity +" "+ favoriteDrink +" "+ ringResponse +" "+ favoriteCompanion);
      event.preventDefault();




});
});
