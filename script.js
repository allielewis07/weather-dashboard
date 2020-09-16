$(document).ready(function(){
    $("#search-button").on("click",function(){
        var search = $("#search-value").val();
        weather(search);
    })
function weather(city){
    console.log(city)
$.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid=870ca5ad879da9e65c431a872094b603",
    method: "GET"
    }).then(function(response) {
    console.log(response)
    var history = JSON.parse(window.localStorage.getItem("history")) || [];
    if (history.indexOf(city) === -1) {
        history.push(city);
        window.localStorage.setItem("history", JSON.stringify(history));
        makeRow(city);
    }
});
}
$("List-History").on("click","li",function(){
var results = (city).value();
console.log(results)
})
$(".history").on("click", "li", function() {
    searchWeather($(this).text());
  });
function makeRow(text) {
    var Li =$("<li>").addClass("list-group-item list-group-item-action").text(text);
    $("List-History").append(Li);
    };
var history = JSON.parse(window.localStorage.getItem("history")) || {};
if (history.length > 0){
    console.log(history)
}
});

