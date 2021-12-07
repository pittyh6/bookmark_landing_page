// Features SHOW/HIDE
$("#features a").on("click", function (event) {
    var textEvent = event.target.text;
    if (textEvent === "Simple Bookmarking") {
        $("#simpleBookmarking").show();
        $("#speedySearching").hide();
        $("#easySharing").hide();
    } else if (textEvent === "Speedy Searching") {
        $("#simpleBookmarking").hide();
        $("#easySharing").hide();
        $("#speedySearching").show();
    } else if (textEvent === "Easy Sharing") {
        $("#simpleBookmarking").hide();
        $("#easySharing").show();
        $("#speedySearching").hide();
    } else {
        console.log("Feature links is not working: " + event.target.text);
    }
});

// Questions SHOW/HIDE 
$("#questions img").on("click", function (event) {
    var idImg = event.target.id;
    console.log(idImg)
    if ($("#" + idImg).hasClass("svg") === false) {
        $("#" + idImg + "a").show();
        $("#" + idImg).addClass("svg");
    } else {
        $("#" + idImg + "a").hide();
        $("#" + idImg).removeClass("svg");
    }
});

//EMAIL validation
var joinInputText = $("#join input");
function EmailValidation(enteredEmail) {
    var mail_format = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (enteredEmail.value.match(mail_format)) {
        (joinInputText).addClass("is-valid");
        $(joinInputText).removeClass("is-invalid");
        document.form1.text1.focus();
        return true;
    }else{
        $(joinInputText).addClass("is-invalid");        
        $(joinInputText).removeClass("is-valid");
        document.form1.text1.focus();
        return false;
    }
}

/* Open */
function openNav() {
    //document.getElementById("navbarNav").style.display = "block";
    $("#navbarNav").css("display", "block");
    $("#navbarNav img").removeClass("hide-elements")
  }
  
  /* Close */
  function closeNav() {
    //document.getElementById("navbarNav").style.display = "none";
    $("#navbarNav").css("display", "none");
    $("#navbarNav img").addClass("hide-elements")
  }