// Initialize Firebase
var config = {
    apiKey: "AIzaSyBkaMyIxV4Eya4SZtYVxeplrGcMIOwTFBo",
    authDomain: "portfolio-6046a.firebaseapp.com",
    databaseURL: "https://portfolio-6046a.firebaseio.com",
    projectId: "portfolio-6046a",
    storageBucket: "portfolio-6046a.appspot.com",
    messagingSenderId: "309873849401"
  };
  firebase.initializeApp(config);

  let database = firebase.database();


  //click event for submit button 
$("#submit").on("click", function (event) {
    event.preventDefault();

    //grab user input 

    let name = $("#name-input").val().trim();
    let email = $("#email-input").val().trim();
    let message = $("#message-input").val().trim();

     // Creates local "temporary" object for holding user data
    let newVisitor = {
        name,
        email,
        message
    };

    //Uploads employee data to the database
    database.ref().push(newVisitor);


    console.log(newVisitor.name);
    console.log(newVisitor.email);
    console.log(newVisitor.message);

    // Clears all of the text-boxes
    $("#name-input").val("");
    $("#email-input").val("");
    $("#message-input").val("");
  


});