function storeInLocalStorage()
{
    var name = $("#txtName").val();
    var bedanking = $("#txtBedanking").val();
    if(typeof(Storage)=="undefined") {
        alert("Sorry, uw browser ondersteunt geen web storage");
    }
    else
    {
        localStorage.setItem("nameRecipient", name);
        localStorage.setItem("bedanking", bedanking);
    }
}

$(function () {
    $("#formBedankingPage").on("submit", function (e) {
        e.preventDefault();  //prevent form from submitting
        storeInLocalStorage();
        window.location.href="voltooid.html";
    });
    console.log("load");
});
