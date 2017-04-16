function storeInLocalStorage()
{
    var email = $("#txtEmail").val();
    var name = $("#txtName").val();
    var supplier = $("#txtSupplier").val();
    if(typeof(Storage)=="undefined") {
        alert("Sorry, uw browser ondersteunt geen web storage");
    }
    else
    {
        localStorage.setItem("emailSender", email);
        localStorage.setItem("nameSender", name);
        localStorage.setItem("supplier", supplier);
    }
}

$(function () {
    $("#formIndexPage").on("submit", function (e) {
        e.preventDefault();  //prevent form from submitting
        storeInLocalStorage();
        window.location.href="bedanking.html";
    });
    console.log("load");
});
