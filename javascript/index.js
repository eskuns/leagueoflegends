import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = 'https://ddglwbqxxddcilakapsu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkZ2x3YnF4eGRkY2lsYWthcHN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkyMzY1OTUsImV4cCI6MjAyNDgxMjU5NX0.8aI9q4hbeJY2xTF8QxyGbX8lILeUF1AA833kOlmWoHc';
const supabase = createClient(supabaseUrl, supabaseKey)

document.addEventListener("DOMContentLoaded", function () {
    // SignUp
    const formSignUp = document.querySelector("#signup-form");

    formSignUp.addEventListener("submit", async function (event) {
        event.preventDefault();
    
        const usernameSignUp = document.getElementById("username-signup").value;
        const emailSignUp = document.getElementById("email-signup").value;
        const passwordSignUp = document.getElementById("password-signup").value;
    
        // Hacher le mot de passe
        const hashedPassword = CryptoJS.SHA256(passwordSignUp).toString(CryptoJS.enc.Hex);
    
        // Envoyer les données au backend avec Supabase
        try {
            const { error } = await supabase
                .from('compte')
                .insert({ pseudo: usernameSignUp, email: emailSignUp, mdp: hashedPassword });
    
            if (error) {
                console.error("Erreur lors de l'inscription :", error.message);
                // Gérer l'erreur, par exemple afficher un message d'erreur à l'utilisateur
            } else {
                console.log("Inscription réussie !");
                // Rediriger l'utilisateur vers une page de connexion ou afficher un message de succès
            }
        } catch (error) {
            console.error("Erreur lors de la requête d'inscription :", error.message);
            // Gérer l'erreur, par exemple afficher un message d'erreur générique à l'utilisateur
        }
    });
    
        // Login
        const formLogin = document.querySelector("#login-form");

        formLogin.addEventListener("submit", async function (event) {
            event.preventDefault();
    
            const usernameLogin = document.getElementById("username-login").value;
            const passwordLogin= document.getElementById("password-login").value;
            
    
            const hashedPassword = CryptoJS.SHA256(passwordLogin).toString(CryptoJS.enc.Hex);
    
            const { data, error } = await supabase
                .from('compte')
                .select('pseudo,mdp,email');
    
            console.log(data);
    
            const isValidCredentials = data.some(user => user.pseudo === usernameLogin || user.email === usernameLogin && user.mdp === hashedPassword);
    
            if (isValidCredentials) {
                window.location.href = "./html/accueil.html";
            } else {
                console.error("Invalid credentials");
            }
        });
    });


$(document).ready(function(){
        var cardToggle = 0;
    
    $('.switch').on('click', function(event){
        event.preventDefault();
            if(cardToggle == 0 ){
                $(this).text('Login');
                $('.box-log').animate({
                    right: '350px'
                });
                $('.box-sign').animate({
                    right: '0'
                });	
    
                cardToggle = 1;
    
            }else{
                $(this).text('Sign Up');
                $('.box-log').animate({
                    right: '0'
                });
                $('.box-sign').animate({
                    right: '-350px'
                });
    
                cardToggle = 0;
            }
        })
    })