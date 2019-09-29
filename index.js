function writeData () {

    var firebaseRef = firebase.database().ref();

    firebaseRef.child("Text").set("Some Value");
}

function push () {
    PushManager.create("Hello World");
}