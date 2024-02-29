<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap"rel="stylesheet"/>
    <link rel="stylesheet" href="../css/ranking.css"/>
  </head>
  <body>
    <main>
      <div id="header">
        <h1>Ranking</h1>
      </div>
      <div id="leaderboard">
        <div class="first"></div>
        <table>

          <?php

function getTeamInfoFromDatabase() {
    // Connexion à la base de données
    $servername = "62.210.131.95:3306"; // Adresse du serveur MySQL
    $username = "eskuns"; // Nom d'utilisateur MySQL
    $mdpbdd = "AXB*eje3tvg-znm3nua"; // Mot de passe MySQL
    $dbname = "eskuns"; // Nom de la base de données MySQL

    // Créer une connexion
    $conn = new mysqli($servername, $username, $mdpbdd, $dbname);

    // Vérifier la connexion
    if ($conn->connect_error) {
        die("La connexion à la base de données a échoué : " . $conn->connect_error);
    }

    // Préparer la requête SQL pour récupérer les informations de l'équipe
    $sql = "SELECT * FROM equipe";

    // Exécuter la requête SQL
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
      // Récupérer les données de chaque équipe et les stocker dans le tableau
      while ($row = $result->fetch_assoc()) {
          $teams[] = array(
              "champion" => $row["champion"],
              "id_coach" => $row["id_coach"],
              "nom" => $row["nom"]
          );
      }
      // Fermer la connexion à la base de données
      $conn->close();
      return $teams;
    } else {
        // Aucun résultat trouvé pour l'équipe donnée
        // Fermer la connexion à la base de données
        $conn->close();

        return false;
    }
}

// Exemple d'utilisation de la fonction
$teamInfo = getTeamInfoFromDatabase();

if ($teamInfo) {
    foreach ($teamInfo as $team) {
        $logoURL = $team["champion"];
        $leaderboardPosition = $team["id_coach"];
        $nomTeam = $team["nom"];
        echo "<tr>
                <td class='number'>$leaderboardPosition</td>
                <td class='name'>$nomTeam</td>
                <td class='points'>$logoURL</td>
              </tr>";
    }
} else {
    echo "Aucune information trouvée pour les équipes";
}

?>

   
        </table>

      </div>
    </main>
  </body>
</html>

<script src="https://unpkg.com/@phosphor-icons/web"></script>
  
</body>
</html>
