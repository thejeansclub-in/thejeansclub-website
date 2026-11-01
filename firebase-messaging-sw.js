importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCbrej21968UxvwEJRp8T1JUfzgMOJAAOA",
  projectId: "the-jeans-club-website",
  messagingSenderId: "610707824562",
  appId: "1:610707824562:web:24f08e30351371c5270eab"
});

firebase.messaging();
