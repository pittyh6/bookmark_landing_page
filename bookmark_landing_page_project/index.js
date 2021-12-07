// Features SHOW/HIDE
$("#features a").on("click", function(event){
    var textEvent = event.target.text;
    if(textEvent === "Simple Bookmarking"){
        $("#simpleBookmarking").show();
        $("#speedySearching").hide();
        $("#easySharing").hide();
    }else if(textEvent === "Speedy Searching"){
        $("#simpleBookmarking").hide();
        $("#easySharing").hide();
        $("#speedySearching").show();
    }else if(textEvent === "Easy Sharing"){
        $("#simpleBookmarking").hide();
        $("#easySharing").show();
        $("#speedySearching").hide();
    }else{
        console.log("Feature links is not working: " + event.target.text);
    }
});

// Questions SHOW/HIDE 
$("#questions img").on("click", function(event){
    var idImg = event.target.id;
    console.log(idImg)
    if($("#"+idImg).hasClass("svg") === false){
        $("#"+idImg+"a").show();
        $("#"+idImg).addClass("svg");
    }else{
        $("#"+idImg+"a").hide();
        $("#"+idImg).removeClass("svg");
    }    
});