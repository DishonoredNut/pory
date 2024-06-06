

$(document).ready(function () {
    $('#notificationForm').on('submit', function (e) {
        e.preventDefault();
        const formData = {
            username: $('input[name="username"]').val(),
            recipient: $('input[name="recipient"]').val(),
            url: $('input[name="url"]').val(),
        };

        $.ajax({
            type: 'POST',
            url: '/send-email',
            data: JSON.stringify(formData),
            contentType: 'application/json',
            success: function (response) {
                alert('Notification sent!');
            },
            error: function (error) {
                alert('Error sending notification.');
            }
        });
    });
});
