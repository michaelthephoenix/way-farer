var signIn = document.getElementById('signInLink');
var signUpForm = document.getElementById('signUpForm');
var signInForm = document.getElementById('signInForm');

function openSignInForm() {
    signUpForm.style.display = 'none'
    signInForm.style.display = 'block'
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
    var createTripBtn = document.getElementById('createTripBtn');
    var createTripForm = document.getElementById('myTripForm');
    var allTrips = document.getElementsByClassName('sampleTrips');
    createTripForm.style.display = 'block';
    allTrips.style.display = 'none';
}
const trips = document.getElementById('trips');

const displayUsers = () => {
    const users = document.getElementById('users');
    const bookings = document.getElementById('bookings');
    bookings.style.display = "none"
    trips.style.display = "none";
    users.style.display = "block";
}
const displayUserBookings = () => {
    const bookingDetails = document.getElementById('each_user_booking');
    users.style.display = 'none';
    bookingDetails.style.display = 'block';
}
function cancelTrip() {
    myTripForm.style.display = 'none';
}
function cancelTripAlert() {
    alert("This trip has bee canceled canceled")
}

window.onclick = function(event) {
    if (event.target == myTripForm) {
        myTripForm.style.display = "none";
    }
}

function displaytrips() {
    allTrips.style.display = 'block'
}

// slide show