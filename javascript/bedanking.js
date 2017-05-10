function storeInLocalStorage() {
    var nameSender = $("#txtNameSender").val();
    var bedanking = $("#txtBedanking").val();
    var filteredBedanking = filterBedanking(bedanking);
    $("#filteredMessage").val(filteredBedanking);
    var email = $("#txtEmail").val();
    var name = $("#txtName").val();
    if (typeof(Storage) == "undefined") {
        alert("Sorry, uw browser ondersteunt geen web storage");
    }
    else {
        localStorage.setItem("nameRecipient", name);
        localStorage.setItem("bedanking", filteredBedanking);
        localStorage.setItem("emailSender", email);
        localStorage.setItem("nameSender", name);
    }
}

function updateSelectedImage(imageString, id)
{
    $("#selectedImage").val(imageString.substring(imageString.lastIndexOf("/")));
    var image = document.getElementById(id);
    image.style.border = "5px solid black";

    for(var i=1; i<=3; i++)
    {
        var check = "img" + i;
        if(check != id)
        {
            var remove = document.getElementById(check);
            remove.style.border = 'none';
        }
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
    $("#img1").on("click",function () {
        updateSelectedImage($(this).attr('src'),$(this).attr('id'));
    });

    $("#img2").on("click",function () {
        updateSelectedImage($(this).attr('src'),$(this).attr('id'));
    });

    $("#img3").on("click",function () {
        updateSelectedImage($(this).attr('src'),$(this).attr('id'));
    });

    $("#btnConfirm").on("click", function (e) {

        var form = document.getElementById("form");
        var $form = $("#form");
        if (form.checkValidity())
        {
            var bedanking = document.getElementById("txtBedanking").value.trim();
            console.log(bedanking);
            if(bedanking != "") {
                if($("#selectedImage").val() != "") {
                    storeInLocalStorage();
                    form.submit();
                    //window.location.href = "voltooid.html";
                    //console.log('e86CT1xT5xIY!MdU84x#');
                }
                else
                {
                    alert("Selecteer een bedankingsfoto");
                }
            }
            else {
                alert("Geef een bedanking in");
            }
        }
        else
        {
            //trigger validation errors
            $form.find(':submit').click();
        }
    });
})
;



