/* this script is responsble for validating the phone number entered by the user */

$('form').on('submit', function(event) {
    var phoneNumber = $('#phone').val().replace(/\D/g, '');
    if (phoneNumber.length !== 10) {
        alert('Please enter a valid ten-digit phone number.');
        event.preventDefault(); 
    }
});