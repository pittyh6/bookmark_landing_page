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