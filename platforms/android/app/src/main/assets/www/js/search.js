
document.getElementById("bt_search").addEventListener("click", function () {
    var user = document.getElementById("user_search").value;
    console.log("User" + user);

    var xhr;
    xhr = new XMLHttpRequest();
    xhr.open("GET", 'https://api.github.com/users/NitramTasu', true);


    xhr.onreadystatechange = function (e) {
        if (xhr.readyState == 4) {
            document.body.innerHTML = "RESULT: " + xhr.responseText;
        }
    }
    xhr.send();
});



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