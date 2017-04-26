<?php
$to = $_POST['txtEmail'];
$subject = "Bedankt voor de mand!";
$filteredMessage = $_POST['filteredMessage'];
$supplier = $_POST['txtSupplier'];
$nameSenderBasket = $_POST['txtNameSender'];
$nameRecipientBasket = $_POST['txtName'];

$message = "
<html>
<head>
<title>Bedankt</title>
</head>
<body>
<h3>Bedankt, $nameSenderBasket</h3>
<p>Ik heb een mand ontvangen van $supplier en ik wilde je met dit bericht bedanken:</p>
<p>$filteredMessage</p>
<p>Met vriendelijke groet,</p>
<p>$nameRecipientBasket</p>
<img src='https://www.w3schools.com/css/trolltunga.jpg'/>
</body>
</html>
";


// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <100procentwestvlaams@example.com>' . "\r\n";

mail($to,$subject,$message,$headers);
echo '<script>window.location = "https://lekkerbedankt.000webhostapp.com/voltooid.html";</script>';

?>