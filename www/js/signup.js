
document.getElementById("signup").addEventListener("click", function () {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var telefone = document.getElementById("telefone").value;

    console.log("Valores: " + email + "  " + senha + "  " + telefone);
    createUser(email, senha, telefone)
});

function createUser(email, password, telefone) {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function (user) {
        console.log("Usuário criado: " + JSON.stringify(user));
        writeUserData(user.uid, telefone)
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorMessage);
        // ...
    });
}


function writeUserData(userId, telefone) {
    firebase.database().ref('users/' + userId).set({
        telefone: telefone
    }).then(function () {

    }).catch(function (error) {

    });
}

var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }


};

app.initialize();