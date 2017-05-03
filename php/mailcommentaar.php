<?php
$to = "ferre.tahon@gmail.com";
$subject = "Mandbeoordeling";
$filteredBesteProduct = $_POST['filteredBesteProduct'];
$filteredOntbrekendeProduct = $_POST['filteredOntbrekendeProduct'];
$filteredAndereCommentaar = $_POST['filteredAndereCommentaar'];
$rating = $_POST['ratingValue'];

$message = "
<html>
<head>
<title>Mandbeoordeling</title>
<p>Beste product: $filteredBesteProduct</p>
<p>Ontbrekende product: $filteredOntbrekendeProduct</p>
<p>Andere commentaar: $filteredAndereCommentaar</p>
<p>Rating: $rating</p>
</body>
</html>
";


// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <100procentwestvlaams@example.com>' . "\r\n";

mail($to,$subject,$message,$headers);
echo '<script>alert("commentaar verzonden";</script>';
echo '<script>window.location = "https://lekkerbedankt.000webhostapp.com/voltooid.html";</script>';

?>