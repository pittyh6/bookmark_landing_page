$("#speedySearchingLink").on("click", function(){
     $("#simpleBookmarking").hide();
     $("#easySharing").hide();
     $("#speedySearching").show();
});
$("#easySharingLink").on("click", function(){
    $("#easySharing").show();
    $("#speedySearching").hide();
    $("#simpleBookmarking").hide();
});
$("#simpleBookmarkinLink").on("click", function(){
    $("#simpleBookmarking").show();
    $("#speedySearching").hide();
    $("#easySharing").hide();
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