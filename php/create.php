<?php
// Vérifie si la méthode de requête est POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupère les données soumises par le formulaire
    $pseudo = $_POST['username'];
    $email = $_POST['email'];
    $mdp = $_POST['mdp'];
    $confirmmdp = $_POST['confirm-mdp'];

    // Vérifie si les mots de passe correspondent
    if ($mdp === $confirmmdp) {
        // Connexion à la base de données
        $servername = "62.210.131.95:3306"; // Adresse du serveur MySQL
        $username = "eskuns"; // Nom d'utilisateur MySQL
        $mdpbdd = "AXB*eje3tvg-znm3nua"; // Mot de passe MySQL
        $dbname = "eskuns"; // Nom de la base de données MySQL

        // Création de la connexion
        $conn = new mysqli($servername, $username, $mdpbdd, $dbname);

        // Vérifie la connexion
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        // Hacher le mot de passe
        $hashed_password = password_hash($mdp, PASSWORD_DEFAULT);

        // Requête SQL pour insérer les données dans la table 'compte'
        $sql = "INSERT INTO compte (pseudo, email, mdp) VALUES ('$pseudo', '$email', '$hashed_password')";

        if ($conn->query($sql) === TRUE) {
            header("Location: ../index.php?success=true");
            exit();
        } else {
            echo "Erreur lors de l'enregistrement: " . $conn->error;
        }

        // Ferme la connexion à la base de données
        $conn->close();
    }
}
?>
