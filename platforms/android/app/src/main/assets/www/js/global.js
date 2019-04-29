var config = {
    apiKey: "AIzaSyCCOJ2pcMGlxFiGisLXnIT9cbxwsB-UIHI",
    authDomain: "jokenpokemon-893d7.firebaseapp.com",
    databaseURL: "https://jokenpo-61b11.firebaseio.com/",
    projectId: "jokenpokemon-893d7",
    storageBucket: "jokenpokemon-893d7.appspot.com",
    messagingSenderId: "537544646420"
};
if (!firebase.apps.length) {
    console.log("iniciou Firebase");
    firebase.initializeApp(config)
} else {
    console.log("Já iniciado");
    firebase.app()
}

