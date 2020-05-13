<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Document sans titre</title>
</head>

<body>


	<h2>Bonjour page cible</h2>


				<?php
$TO = "remy.iamonte@hotmail.fr";

$h  = "From: " . $TO;

$message = "";

while (list($key, $val) = each($_POST)) {
  $message .= "$key : $val\n";
}

mail($TO, $subject, $message, $h);

Header("Location: http://cible.php");

?>
	
</body>
</html>