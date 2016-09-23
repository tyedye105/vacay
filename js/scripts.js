
//Back-end logic

// Location is detmerimned by questions 2,3, and 5.
 var yourVacation = function( favoriteActivity, favoriteDrink, favoriteCompanion) {
   if (favoriteActivity=== "carribean2" && favoriteDrink === "carribean3" && favoriteCompanion == "carribean5") {
     $("#questionaire").toggle();
     $("#hidden-carribean").toggle();
     event.preventDefault();


   } else if (favoriteActivity=== "iceland2" && favoriteDrink === "iceland3" && favoriteCompanion == "iceland5") {
      $("#questionaire").toggle();
      $("#hidden-iceland").toggle();
      event.preventDefault();

    } else if (favoriteActivity === "japan2" && favoriteDrink === "japan3" && favoriteCompanion == "japan5") {
      $("#questionaire").toggle();
      $("#hidden-japan").toggle();
      event.preventDefault();

    } else if (favoriteActivity === "newzealand2" && favoriteDrink === "newzealand3" && favoriteCompanion == "newzealand5") {
      $("#questionaire").toggle();
      $("#hidden-newzealand").toggle();
      event.preventDefault();
    } else {
      singleChoice(favoriteCompanion);
    }


 }
 // incase survey don't match up to produce a result, this function is called and will determine the result based of question 5.
 var singleChoice = function(favoriteCompanion) {
   if (favoriteCompanion === "carribean5") {
     $("#questionaire").toggle();
     $("#hidden-carribean").toggle();
     event.preventDefault();
   } else if (favoriteCompanion === "iceland5") {
     $("#questionaire").toggle();
     $("#hidden-iceland").toggle();
     event.preventDefault();
   } else if (favoriteCompanion === "japan5") {
      $("#questionaire").toggle();
      $("#hidden-japan").toggle();
      event.preventDefault();
   } else if (favoriteCompanion === "newzealand5") {
     $("#questionaire").toggle();
     $("#hidden-newzealand").toggle();
     event.preventDefault();

   }
 }
// Takes user back to the "landing" content
 var goLanding = function( favoriteCompanion) {
   if (favoriteCompanion === "carribean5") {
     $("#hidden-carribean").toggle();

     $("#landing").toggle();
   } else if (favoriteCompanion === "iceland5") {
      $("#hidden-iceland").toggle();
      $("#landing").toggle();




    } else if (favoriteCompanion === "japan5") {
      $("#hidden-japan").toggle();
      $("#landing").toggle();




    } else if (favoriteCompanion === "newzealand5") {
      $("#hidden-newzealand").toggle();
      $("#landing").toggle();



   }

 }
 // this function will take them back to the survey form.
var goSurvey = function(favoriteCompanion) {
  if (favoriteCompanion === "carribean5") {
    $("#hidden-carribean").toggle();
    $("#questionaire").toggle();


  } else if (favoriteCompanion === "iceland5") {
     $("#hidden-iceland").toggle();
     $("#questionaire").toggle();


   } else if (favoriteCompanion === "japan5") {
     $("#hidden-japan").toggle();
     $("#questionaire").toggle();


   } else if (favoriteCompanion === "newzealand5") {
     $("#hidden-newzealand").toggle();
     $("#questionaire").toggle();


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
    var destination = yourVacation(favoriteActivity, favoriteDrink, favoriteCompanion);
});


  $("button#begin").click(function(event) {
    $("#landing").hide();
    $("#questionaire").show();
    event.preventDefault();
  });
  $("button.to-landing").click(function(event) {
    var favoriteCompanion = $("input:radio[name=companion]:checked").val();
    goLanding (favoriteCompanion);
    event.preventDefault();
  });
  $("button.to-survey").click(function(event) {
    var favoriteCompanion = $("input:radio[name=companion]:checked").val();
    goSurvey (favoriteCompanion);
    event.preventDefault();
  });



});


//endingtag
