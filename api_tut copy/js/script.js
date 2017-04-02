$(document).ready(function() {
  var key = "f0e8e78ae02547cea53232217171503";
  var url = "http://pokeapi.co/api/v2/pokemon/butterfree";

    
$.getJSON(url, function(data){
      console.log(data);  
    $("#weather").html(data["name"]);
})
$.getJSON(url, function(data){
      console.log(data);  
    $("#weather2").html(data["type"]);
})
});


/*
    Get weather API key at
    https://www.apixu.com/signup.aspx
*/