
document.getElementById("info_table").hidden = false

document.getElementById("logout").addEventListener("click", function () {
    firebase.auth().signOut().then(function () {
        window.location.href = 'index.html'
    }).catch(function (error) {
        console.log(error);
    });
});

document.getElementById("cancel").addEventListener("click", function () {
    document.getElementById("info_table").hidden = false
    document.getElementById("form_update").hidden = true
});

document.getElementById("update").addEventListener("click", function () {
    var telefone = document.getElementById("telefone").value;
    var user = firebase.auth().currentUser;
    writeUserData(user.uid, telefone)
});

function writeUserData(userId, telefone) {
    console.log('Id do usuario' + userId)
    firebase.database().ref('users/' + userId).set({
        telefone: telefone
    }).then(function () {

    }).catch(function (error) {

    });
}

document.getElementById("edit").addEventListener("click", function () {
    document.getElementById("info_table").hidden = true
    document.getElementById("form_update").hidden = false
});

var user = JSON.parse(sessionStorage.getItem('user'));
document.getElementById("data_email").textContent = user.email

document.getElementById("email").value = user.email
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        firebase.database().ref('/users/' + user.uid).once('value').then(function (snapshot) {
            console.log("Usuario: " + JSON.stringify(snapshot.val()));
            var telefone = (snapshot.val() && snapshot.val().telefone) || 'Anonymous';
            document.getElementById("data_phone").textContent = telefone
            document.getElementById("telefone").value = telefone
        });

    } else {
        // User is signed out.
        // ...
    }
});
