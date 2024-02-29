<?php
session_start();
// Connexion à la base de données
$conn = new mysqli("62.210.131.95:3306", "eskuns", "AXB*eje3tvg-znm3nua", "eskuns");

// Vérification des erreurs de connexion
if ($conn->connect_error) {
    die("Échec de la connexion à la base de données: " . $conn->connect_error);
}

// Récupérer les données du formulaire
$username = $_POST['username'];
$password = $_POST['mdp'];

// Requête pour vérifier les informations de connexion
$query = "SELECT * FROM compte WHERE pseudo='$username' OR email='$username'";
$result = $conn->query($query);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $hashedPassword = $row['mdp'];
    // Vérification du mot de passe
    if (password_verify($password, $hashedPassword)) {
        // Si l'utilisateur existe et que le mot de passe est correct, démarrer une session et rediriger vers une page sécurisée
        $_SESSION['username'] = $username;
        header("Location: ./accueil.php");
    } else {
        // Sinon, afficher un message d'erreur
        header("Location: ../index.php?error=true");
        exit();
    }
} else {
    // Si l'utilisateur n'existe pas, afficher un message d'erreur
    header("Location: ../index.php?error=true");
    exit();
}

$conn->close();
?>
