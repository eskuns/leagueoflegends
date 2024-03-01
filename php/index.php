<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel='stylesheet' href='http:////netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css'>
    <link rel="stylesheet" href="./css/index.css">
</head>
<body>

<div class="user-card">
	<div class="box-log">
        <form class="form-log" action="./php/login_process.php" method="POST">
			<input type="text" class="username" name="username" placeholder="Email ou Nom d'utilisateur" required/>
			<input type="password" class="mdp" name="mdp" placeholder="Votre mot de passe" required/>
			<input type="submit" value="Se Connecter" class="login" />
		</form>

<?php
// Vérifie si le paramètre de succès est présent dans l'URL
if (isset($_GET['error']) && $_GET['error'] === "true") {
    echo "<div style='background-color: red;'>Incorrect.</div>";
}

// Vérifie si le paramètre de succès est présent dans l'URL
if (isset($_GET['success']) && $_GET['success'] === "true") {
    echo "<div style='background-color: green;'>Compte ajouté !</div>";
}
?>
	</div>




	<div class="box-sign">
		<form class="form-sign" action="./php/create.php" method="POST" >
            <input type="text" name="username" class="username" placeholder="Nom d'utilisateur" required/>
            <input type="email" name="email" class="email" placeholder="Email" required/>
            <input type="password" name="mdp" class="mdp" placeholder="Votre mot de passe" required/>
            <input type="password" name="confirm-mdp" class="confirm-mdp" placeholder="Confirmez votre mot de passe" required/>
            <input type="submit" value="Sign Up" class="signup" />
        </form>
	</div>




	<div class="footer">
		<span> or </span> 
        <a class="switch" href="#">Sign Up</a>
	</div>
</div>






<script src='https://code.jquery.com/jquery-2.2.4.min.js'></script>
<script  src="login.js"></script>



    
</body>
</html>