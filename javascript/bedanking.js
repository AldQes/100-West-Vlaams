function storeInLocalStorage() {
    var name = $("#txtName").val();
    var bedanking = $("#txtBedanking").val();
    var filteredBedanking = filterBedanking(bedanking);
    $("#filteredMessage").val(filteredBedanking);
    var email = $("#txtEmail").val();
    var name = $("#txtName").val();
    var supplier = $("#txtSupplier").val();
    if (typeof(Storage) == "undefined") {
        alert("Sorry, uw browser ondersteunt geen web storage");
    }
    else {
        localStorage.setItem("nameRecipient", name);
        localStorage.setItem("bedanking", filteredBedanking);
        localStorage.setItem("emailSender", email);
        localStorage.setItem("nameSender", name);
        localStorage.setItem("supplier", supplier);
    }
}


function filterBedanking(bedanking) {
    var offensiveWords = ["neger", "nigger", "nigga", "fuck", "dick", "bitch", "wtf"];
    bedanking = bedanking.toLowerCase();
    for (var i = 0; i < offensiveWords.length; i++) {
        var replaceString = buildReplaceString(offensiveWords[i].length);
        bedanking = bedanking.replace(new RegExp(offensiveWords[i], "g"), replaceString);
    }
    return bedanking;
}

function buildReplaceString(length) {
    var replaceString = "";
    for (var i = 0; i < length; i++) {
        replaceString += "*";
    }
    return replaceString;
}

$(function () {

    $("#btnConfirm").on("click", function (e) {
        storeInLocalStorage();
        if ($("#form").valid())
        {
            document.getElementById("form").submit();
            window.location.href = "voltooid.html";
            //console.log('e86CT1xT5xIY!MdU84x#');
        }
    });
})
;



