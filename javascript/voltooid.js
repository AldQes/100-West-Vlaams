var rating;

function fetchFromLocalStorage() {
    var bedanking = localStorage.getItem("bedanking");
    $("#bedanking").text(bedanking);

}

$(function () {
    fetchFromLocalStorage();
    $('.star').change(
        function(){
           rating =  $(this).attr('id').substring(5,6);
           console.log(rating);
        }
    )
});
