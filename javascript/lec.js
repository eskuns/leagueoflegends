import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = 'https://ddglwbqxxddcilakapsu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkZ2x3YnF4eGRkY2lsYWthcHN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkyMzY1OTUsImV4cCI6MjAyNDgxMjU5NX0.8aI9q4hbeJY2xTF8QxyGbX8lILeUF1AA833kOlmWoHc';
const supabase = createClient(supabaseUrl, supabaseKey)

async function fetchAndDisplayTeamInfo() {
    try {
        // Exécuter la requête SQL pour récupérer les informations de l'équipe
        const { data: teams, error } = await supabase
            .from('equipe')
            .select('*');

        if (error) {
            console.error('Erreur lors de l\'exécution de la requête SQL :', error.message);
            return;
        }

        // Sélectionner l'élément HTML où vous souhaitez afficher le tableau
        const tableContainer = document.getElementById('tableContainer');

        // Créer un tableau HTML
        const table = document.createElement('table');
        table.classList.add('team-table');



        // Vérifier si des équipes ont été trouvées
        if (teams && teams.length > 0) {
            // Parcourir chaque équipe et ajouter une ligne au tableau
            teams.forEach(team => {
                const logoURL = team.champion;
                const leaderboardPosition = team.id_coach;
                const nomTeam = team.nom;

                // Créer une nouvelle ligne pour l'équipe
                const row = table.insertRow();
                row.innerHTML = `<td>${leaderboardPosition}</td><td>${nomTeam}</td><td>${logoURL}</td>`;
            });

            // Ajouter le tableau au conteneur HTML
            tableContainer.appendChild(table);
        } else {
            console.log("Aucune information trouvée pour les équipes");
        }
    } catch (error) {
        console.error('Erreur lors de la récupération des informations de l\'équipe :', error.message);
    }
}

// Appeler la fonction pour récupérer et afficher les informations de l'équipe
fetchAndDisplayTeamInfo();
