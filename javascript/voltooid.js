function fetchFromLocalStorage() {
    var bedanking = localStorage.getItem("bedanking");
    $("#bedanking").text(bedanking);
}

$(function () {
    fetchFromLocalStorage();
    console.log("load");
});
