$(document).ready(function() {
    $('#getUsers').on('click', function() {
        // do stuff here

        return $.ajax({
            method: 'GET',
            url: 'http://reqr.es/api/users?page=1',
            success: function(res) {
                console.log(res); //do something
            }
        })

    })
})