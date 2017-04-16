function fetchFromLocalStorage() {
    var bedanking = localStorage.getItem("bedanking");
    console.log(bedanking);
    $("#bedanking").text(bedanking);
}

$(function () {
    fetchFromLocalStorage();
    console.log("load");
});
