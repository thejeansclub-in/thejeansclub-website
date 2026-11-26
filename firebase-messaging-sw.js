// Service worker for background push (site band hone par bhi notification dikhata hai).
// IMPORTANT: ye file website ke ROOT par honi chahiye:  https://your-site.vercel.app/firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCbrej21968UxvwEJRp8T1JUfzgMOJAAOA",
  projectId: "the-jeans-club-website",
  messagingSenderId: "610707824562",
  appId: "1:610707824562:web:24f08e30351371c5270eab"
});

// Notification payload FCM khud dikha deta hai; tap karne par site khulti hai (webpush.fcm_options.link).
firebase.messaging();
