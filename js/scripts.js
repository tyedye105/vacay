//Back-end logic
// Location is detmerimned by questions 2, and 3. If there is no match, then it decides a result off of question 5
var yourVacation = function( favoriteActivity, favoriteDrink, favoriteCompanion) {
  if (favoriteActivity=== "carribean2" && favoriteDrink === "carribean3") {
    $("#questionaire").hide();
    $("#hidden-carribean").show();
    event.preventDefault();
  } else if (favoriteActivity=== "iceland2" && favoriteDrink === "iceland3") {
    $("#questionaire").hide();
    $("#hidden-iceland").show();
    event.preventDefault();
  } else if (favoriteActivity === "japan2" && favoriteDrink === "japan3") {
    $("#questionaire").hide();
    $("#hidden-japan").show();
    event.preventDefault();
  } else if (favoriteActivity === "newzealand2" && favoriteDrink === "newzealand3") {
    $("#questionaire").hide();
    $("#hidden-newzealand").show();
    event.preventDefault();
  } else if (favoriteCompanion ==="carribean5") {
    $("#questionaire").hide();
    $("#hidden-carribean").show();
    event.preventDefault();
  } else if (favoriteCompanion === "iceland5") {
    $("#questionaire").hide();
    $("#hidden-iceland").show();
    event.preventDefault();
  } else if (favoriteCompanion === "japan5") {
    $("#questionaire").hide();
    $("#hidden-japan").show();
    event.preventDefault();
  } else if (favoriteCompanion === "newzealand5") {
    $("#questionaire").hide();
    $("#hidden-newzealand").show();
    event.preventDefault();
  };
};
// Takes user back to the "landing" content off question 3
var goLanding3 = function(  favoriteDrink) {
  if (favoriteDrink === "carribean3") {
    $("#hidden-carribean").hide();
    $("#landing").show();
  } else if (favoriteDrink ==="japan3") {
    $("#hidden-japan").hide();
    $("#landing").show();
  } else if (favoriteDrink ==="newzealand3") {
    $("#hidden-newzealand").hide();
    $("#landing").show();
  } else if (favoriteDrink ==="iceland3") {
    $("#hidden-iceland").hide();
    $("#landing").show();
  };
 };
// Takes user back to the "landing" content off question 5
var goLanding5 = function( favoriteCompanion) {
  if (favoriteCompanion === "carribean5") {
    $("#hidden-carribean").hide();
    $("#landing").show();
  } else if (favoriteCompanion === "japan5") {
    $("#hidden-japan").hide();
    $("#landing").show();
  } else if (favoriteCompanion === "newzealand5") {
    $("#hidden-newzealand").hide  ();
    $("#landing").show();
  } else if (favoriteCompanion === "iceland5") {
    $("#hidden-iceland").hide();
    $("#landing").show();
  };
};
// Takes user back to the survey form off question 3
var goSurvey3 = function(  favoriteDrink) {
  if (favoriteDrink === "carribean3") {
    $("#hidden-carribean").hide();
    $("#questionaire").show();
  } else if (favoriteDrink ==="japan3") {
    $("#hidden-japan").hide();
    $("#questionaire").show();
  } else if (favoriteDrink ==="newzealand3") {
    $("#hidden-newzealand").hide();
    $("#questionaire").show();
  } else if (favoriteDrink ==="iceland3") {
    $("#hidden-iceland").hide();
    $("#questionaire").show();
  };
 };
// Takes user back to the survey form off question 5
var goSurvey5 = function( favoriteCompanion) {
  if (favoriteCompanion === "carribean5") {
    $("#hidden-carribean").hide();
    $("#questionaire").show();
  } else if (favoriteCompanion === "japan5") {
    $("#hidden-japan").hide();
    $("#questionaire").show();
  } else if (favoriteCompanion === "newzealand5") {
    $("#hidden-newzealand").hide  ();
    $("#questionaire").show();
  }else if (favoriteCompanion === "iceland5") {
    $("#hidden-iceland").hide();
    $("#questionaire").show();
  };
};
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
    var favoriteDrink = $("#drink").val();
    var favoriteCompanion = $("input:radio[name=companion]:checked").val();
    goLanding3 (favoriteDrink);
    goLanding5 (favoriteCompanion)
    event.preventDefault();
  });
  $("button.to-survey").click(function(event) {
    var favoriteDrink = $("#drink").val();
    var favoriteCompanion = $("input:radio[name=companion]:checked").val();
    goSurvey3 (favoriteDrink);
    goSurvey5 (favoriteCompanion);
    event.preventDefault();
  });
});
