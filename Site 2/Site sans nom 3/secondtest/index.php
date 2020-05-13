<!DOCTYPE html>
<html>
    <head>
        <title>Notre première instruction : echo</title>
        <meta charset="utf-8" />
    </head>
    <body>
		
		
        <h2>Formulaire :</h2>
        
	
		<form method="post" action="index.php">
			
		
			<p>
			
				<input type="text" name="nom"/>
				
				<textarea name="message" rows="8" cols="45">
		
				
				</textarea>
				
				<input type="submit" value="Valider" />
 			
			
			</p>
		
							<?php
			
$TO = "remy.iamonte@hotmail.fr";

$h  = "From: " . $TO;

$message = "";

while (list($key, $val) = each($_POST)) {
  $message .= "$key : $val\n";
}

mail($TO, $subject, $message, $h);

Header("Location: http://127.0.0.1:50938/preview/app/index.html");

?>
			
		
		</form>
		

		
    </body>
</html>