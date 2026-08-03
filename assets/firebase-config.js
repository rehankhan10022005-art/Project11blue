/* ===========================================================
   FIREBASE CONFIG — titangym-fitness project.
   This file is loaded by every page (public) and by admin.html.
=========================================================== */
const firebaseConfig = {
  apiKey: "AIzaSyCq_T6Og_w9SMAWCAKPvxoliU6DaNvYKfU",
  authDomain: "titangym-fitness.firebaseapp.com",
  projectId: "titangym-fitness",
  storageBucket: "titangym-fitness.firebasestorage.app",
  messagingSenderId: "380136942352",
  appId: "1:380136942352:web:17d14435854704cbc51395",
  measurementId: "G-44ZNE3NL2H"
};

/* ===========================================================
   CLOUDINARY CONFIG — used by admin.html's upload buttons.
   cloudName + uploadPreset only (unsigned preset, so no API
   secret is ever needed or exposed here).
=========================================================== */
const cloudinaryConfig = {
  cloudName: "cowoq8sh",
  uploadPreset: "rehantitangymraipur"
};
