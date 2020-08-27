
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBFRaDrmqnxumLU5MEj31g3hB-7v7HRgIs",
    authDomain: "portfolio-landing-form.firebaseapp.com",
    databaseURL: "https://portfolio-landing-form.firebaseio.com",
    projectId: "portfolio-landing-form",
    storageBucket: "portfolio-landing-form.appspot.com",
    messagingSenderId: "218550048723",
    appId: "1:218550048723:web:e5593cae1c6c6314a78126",
    measurementId: "G-J2N51TX19E"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.initializeApp(firebase.databaseConfig);


  // Initialize Firebase



// Reference messages collection
// this is the code that does not work
var messagesRef = firebase.database() .ref('messages');

// Listen for form submit

document.getElementById('contactForm').addEventListener('submit',submitForm);
//submit form
function submitForm(e){
  e.preventDefault();


// Get values
var name = getInputVal('name');
var company = getInputVal('company');
var email = getInputVal('email');
var phone = getInputVal('phone');
var message = getInputVal('message');

//save message
saveMessage (name, company, email, phone, message);

}



// Function to get get form values
function getInputVal(id){
return document.getElementById(id).value;

}

//save message to firebase

function saveMessage(name, company, email, phone, message){var newMessageRef = messagesRef.push();
newMessageRef.set({
 name: name,
 company: company,
 email: email,
 phone: phone,
 message: message
}) ;
}