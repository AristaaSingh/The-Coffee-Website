/* this script is responsible for sending submitted form data to the local storage */

$(document).ready(function() {
    $('form').submit(function(event) {
        event.preventDefault();
        var formData = {
            name: $('#name').val(),
            phone: $('#phone').val(),
            email: $('#email').val(),
            lang: $('#lang').val()
        };
        localStorage.setItem('formData', JSON.stringify(formData));
        var storedFormData = JSON.parse(localStorage.getItem('formData'));
        console.log(storedFormData);
    });
});
