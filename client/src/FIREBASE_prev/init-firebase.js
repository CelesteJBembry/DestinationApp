// Initialize Firebase with a "default" Firebase project
let defaultProject = firebase.initializeApp(firebaseConfig);

console.log(defaultProject.name);  // "[DEFAULT]"

// Option 1: Access Firebase services via the defaultProject variable
let defaultStorage = defaultProject.storage();
let defaultFirestore = defaultProject.firestore();

// Option 2: Access Firebase services using shorthand notation
defaultStorage = firebase.storage();
defaultFirestore = firebase.firestore();

