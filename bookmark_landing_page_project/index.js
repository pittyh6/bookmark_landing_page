
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



$("#q1").on("click", function(){
    if($("#q1").hasClass("svg") === false){
        $("#q1a").show();
        $("#q1").addClass("svg");
    }else{
        $("#q1a").hide();
        $("#q1").removeClass("svg");
    }
    
});