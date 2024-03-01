"use strict";

var _esm = require("https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm");

var supabaseUrl = 'https://ddglwbqxxddcilakapsu.supabase.co';
var supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkZ2x3YnF4eGRkY2lsYWthcHN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkyMzY1OTUsImV4cCI6MjAyNDgxMjU5NX0.8aI9q4hbeJY2xTF8QxyGbX8lILeUF1AA833kOlmWoHc';
var supabase = (0, _esm.createClient)(supabaseUrl, supabaseKey);
document.addEventListener("DOMContentLoaded", function () {
  // SignUp
  var formSignUp = document.querySelector("#signup-form");
  formSignUp.addEventListener("submit", function _callee(event) {
    var usernameSignUp, emailSignUp, passwordSignUp, hashedPassword, _ref, error;

    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            event.preventDefault();
            usernameSignUp = document.getElementById("username-signup").value;
            emailSignUp = document.getElementById("email-signup").value;
            passwordSignUp = document.getElementById("password-signup").value; // Hacher le mot de passe

            hashedPassword = CryptoJS.SHA256(passwordSignUp).toString(CryptoJS.enc.Hex); // Envoyer les données au backend avec Supabase

            _context.prev = 5;
            _context.next = 8;
            return regeneratorRuntime.awrap(supabase.from('compte').insert({
              pseudo: usernameSignUp,
              email: emailSignUp,
              mdp: hashedPassword
            }));

          case 8:
            _ref = _context.sent;
            error = _ref.error;

            if (error) {
              console.error("Erreur lors de l'inscription :", error.message); // Gérer l'erreur, par exemple afficher un message d'erreur à l'utilisateur
            } else {
              console.log("Inscription réussie !"); // Rediriger l'utilisateur vers une page de connexion ou afficher un message de succès
            }

            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](5);
            console.error("Erreur lors de la requête d'inscription :", _context.t0.message); // Gérer l'erreur, par exemple afficher un message d'erreur générique à l'utilisateur

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[5, 13]]);
  }); // Login

  var formLogin = document.querySelector("#login-form");
  formLogin.addEventListener("submit", function _callee2(event) {
    var usernameLogin, passwordLogin, hashedPassword, _ref2, data, error, isValidCredentials;

    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            event.preventDefault();
            usernameLogin = document.getElementById("username-login").value;
            passwordLogin = document.getElementById("password-login").value;
            hashedPassword = CryptoJS.SHA256(passwordLogin).toString(CryptoJS.enc.Hex);
            _context2.next = 6;
            return regeneratorRuntime.awrap(supabase.from('compte').select('pseudo,mdp,email'));

          case 6:
            _ref2 = _context2.sent;
            data = _ref2.data;
            error = _ref2.error;
            console.log(data);
            isValidCredentials = data.some(function (user) {
              return user.pseudo === usernameLogin || user.email === usernameLogin;
            } && user.mdp === hashedPassword);

            if (isValidCredentials) {
              window.location.href = "./html/accueil.html";
            } else {
              console.error("Invalid credentials");
            }

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    });
  });
});
$(document).ready(function () {
  var cardToggle = 0;
  $('.switch').on('click', function (event) {
    event.preventDefault();

    if (cardToggle == 0) {
      $(this).text('Login');
      $('.box-log').animate({
        right: '350px'
      });
      $('.box-sign').animate({
        right: '0'
      });
      cardToggle = 1;
    } else {
      $(this).text('Sign Up');
      $('.box-log').animate({
        right: '0'
      });
      $('.box-sign').animate({
        right: '-350px'
      });
      cardToggle = 0;
    }
  });
});