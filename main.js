// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
  apiKey: "AIzaSyB4PdS0DRFKreGI1cdC0fZ6NtwHvyfG3iM",
  authDomain: "event-registration-d2cad.firebaseapp.com",
  databaseURL: "https://event-registration-d2cad-default-rtdb.firebaseio.com",
  projectId: "event-registration-d2cad",
  storageBucket: "event-registration-d2cad.appspot.com",
  messagingSenderId: "87735277013",
  appId: "1:87735277013:web:e80eb0ab183a34c709995c",
  measurementId: "G-3BMLETW3HD"
};

firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('registrations');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var studentno = getInputVal('studentno');
  var unvNo = getInputVal('unvNo');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var branch = getInputVal('branch');
  var section = getInputVal('section');
  var year = getInputVal('year');
  var gender = getInputVal('gender');
  var ishosteller = getInputVal('ishosteller');

  // Save message
  saveMessage(name, studentno, email, phone, branch,section,year,gender,ishosteller,unvNo);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
  grecaptcha.reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, studentno, email, phone, branch,section,year,gender,ishosteller,unvNo){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    studentno:studentno,
    unvNo: unvNo,
    email:email,
    phone:phone,
    branch: branch,
    section:section,
    year:year,
    gender:gender,
    ishosteller: ishosteller,

  });
}