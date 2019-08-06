var signIn = document.getElementById('signInLink');
var signUpForm = document.getElementById('signUpForm');
var signInForm = document.getElementById('signInForm');

function openSignInForm() {
    signUpForm.style.display = 'none'
    signInForm.style.display = 'block'
}
function openSignUpForm() {
    signUpForm.style.display = 'block'
    signInForm.style.display = 'none'
}
function logIn() {
    var userName = document.getElementById('uname').value;
    var password = document.getElementById('psw').value;
    
    
    if (userName == "user" && password == "user") {
        window.open('user.html');
        
    }
    if (userName == "admin" && password == "admin") {
        window.open('admin.html')
    }
    else {
        alert("Access Denied")
    }
}

function createTrip() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const displayUserBookings = () => {
    const bookingDetails = document.getElementById('each_user_booking');
    users.style.display = 'none';
    bookingDetails.style.display = 'block';
}
function cancelTrip() {
    modal.style.display = 'none';
}
function cancelTripAlert() {
    alert("This trip has bee canceled canceled")
}

// window.onclick = function(event) {
//     if (event.target == myTripForm) {
//         myTripForm.style.display = "none";
//     }
// }

function displaytrips() {
    allTrips.style.display = 'block'
}

// slide show