"use strict";

var _esm = require("https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm");

var supabaseUrl = 'https://ddglwbqxxddcilakapsu.supabase.co';
var supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkZ2x3YnF4eGRkY2lsYWthcHN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkyMzY1OTUsImV4cCI6MjAyNDgxMjU5NX0.8aI9q4hbeJY2xTF8QxyGbX8lILeUF1AA833kOlmWoHc';
var supabase = (0, _esm.createClient)(supabaseUrl, supabaseKey);

function fetchAndDisplayTeamInfo() {
  var _ref, teams, error, tableContainer, table;

  return regeneratorRuntime.async(function fetchAndDisplayTeamInfo$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(supabase.from('equipe').select('*'));

        case 3:
          _ref = _context.sent;
          teams = _ref.data;
          error = _ref.error;

          if (!error) {
            _context.next = 9;
            break;
          }

          console.error('Erreur lors de l\'exécution de la requête SQL :', error.message);
          return _context.abrupt("return");

        case 9:
          // Sélectionner l'élément HTML où vous souhaitez afficher le tableau
          tableContainer = document.getElementById('leaderboard'); // Créer un tableau HTML

          table = document.createElement('table');
          table.classList.add('table'); // Vérifier si des équipes ont été trouvées

          if (teams && teams.length > 0) {
            // Parcourir chaque équipe et ajouter une ligne au tableau
            teams.forEach(function (team) {
              var logoURL = team.champion;
              var leaderboardPosition = team.id_coach;
              var nomTeam = team.nom; // Créer une nouvelle ligne pour l'équipe

              var row = table.insertRow();
              row.innerHTML = "<tr><td class=\"number\">1</td><td class=\"name\">Lee Taeyong</td></tr>";
            }); // Ajouter le tableau au conteneur HTML

            tableContainer.appendChild(table);
          } else {
            console.log("Aucune information trouvée pour les équipes");
          }

          _context.next = 18;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](0);
          console.error('Erreur lors de la récupération des informations de l\'équipe :', _context.t0.message);

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 15]]);
} // Appeler la fonction pour récupérer et afficher les informations de l'équipe


fetchAndDisplayTeamInfo();