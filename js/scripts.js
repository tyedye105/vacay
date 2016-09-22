 var yourVacation = function( favoriteSeason, favoriteActivity) {
   if (favoriteSeason === "carribean1" && favoriteActivity === "carribean2") {
     $("#questionaire").toggle();
     $("#hidden-carribean").toggle();
     event.preventDefault();


    } else if (favoriteSeason === "iceland1" && favoriteActivity === "iceland2") {
      $("#questionaire").toggle();
      $("#hidden-iceland").toggle();
      alert("hi");
      event.preventDefault();


    } else if (favoriteSeason === "japan1" && favoriteActivity === "japan2") {
      $("#questionaire").toggle();
      $("#hidden-japan").toggle();
      alert("hi");
      event.preventDefault();
    } else if (favoriteSeason === "newzealand1" && favoriteActivity === "newzealand2") {
      $("#questionaire").toggle();
      $("#hidden-newzealand").toggle();
      alert("hi");
      event.preventDefault();

   }

 }




//Front End logic
$(document).ready(function(event) {
  $("form#survey").submit(function() {
    var favoriteSeason = $("input:radio[name=season]:checked").val();
    var favoriteActivity = $("#activity").val();
    var favoriteDrink = $("#drink").val();
    var ringResponse = $("#ring").val();
    var favoriteCompanion = $("input:radio[name=companion]:checked").val();
    var destination = yourVacation(favoriteSeason, favoriteActivity);






});
});
