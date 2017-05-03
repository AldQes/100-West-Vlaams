var rating;

function fetchFromLocalStorage() {
    var bedanking = localStorage.getItem("bedanking");
    $("#bedanking").text(bedanking);

}

function evaluateFields()
{
    var besteProduct = filter($("#txtBesteProduct").val());
    var ontbrekendeProduct = filter($("#txtOntbrekendeProduct").val());
    var andereCommentaar = filter($("#txtAndereCommentaar").val());
    $("#filteredBesteProduct").val(besteProduct);
    $("#filteredOntbrekendeProduct").val(ontbrekendeProduct);
    $("#filteredAndereCommentaar").val(andereCommentaar);
    $("#ratingValue").val(rating);
}

function filter(bedanking) {
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
    rating = "";
    fetchFromLocalStorage();
    $('.star').change(
        function(){
           rating =  $(this).attr('id').substring(5,6);
        }
    );

    $("#btnConfirm").on("click", function (e) {

        var form = document.getElementById("form");
        var $form = $("#form");
        if (form.checkValidity())
        {
            var andereCommentaar = document.getElementById("txtAndereCommentaar").value.trim();
            if(andereCommentaar != "") {
                if(rating != "") {
                    evaluateFields();
                    form.submit();
                    alert("Uw commentaar is ontvangen");
                }
                else
                {
                    alert("Geef een rating in")
                }
            }
            else
            {
                alert("Geef een commentaar in");
            }
        }
        else
        {
            //trigger validation errors
            $form.find(':submit').click();
        }
    });
});
