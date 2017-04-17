function storeInLocalStorage()
{
    var name = $("#txtName").val();
    var bedanking = $("#txtBedanking").val();
    var filteredBedanking = filterBedanking(bedanking);
    if(typeof(Storage)=="undefined") {
        alert("Sorry, uw browser ondersteunt geen web storage");
    }
    else
    {
        localStorage.setItem("nameRecipient", name);
        localStorage.setItem("bedanking", filteredBedanking);
    }
}


function filterBedanking(bedanking)
{
    var offensiveWords = ["neger","nigger","nigga","fuck","dick","bitch","wtf"];
    bedanking = bedanking.toLowerCase();
    for(var i=0; i<offensiveWords.length; i++)
    {
        var replaceString = buildReplaceString(offensiveWords[i].length);
        bedanking = bedanking.replace(new RegExp(offensiveWords[i],"g"),replaceString);
    }
    return bedanking;
}

function buildReplaceString(length)
{
    var replaceString = "";
    for(var i=0; i<length; i++)
    {
        replaceString += "*";
    }
    return replaceString;
}

$(function () {
    $("#formBedankingPage").on("submit", function (e) {
        e.preventDefault();  //prevent form from submitting
        storeInLocalStorage();
        window.location.href="voltooid.html";
    });
    console.log("load");
});
