$(document).ready(function() {
    Email.send({
        SecureToken: "783fd4a8-9fa7-4e3e-a759-0f34b371d4cf",
        To: 'iteachasso@gmail.com',
        From: "iteachasso@gmail.com",
        Subject: "test envoie de mail",
        Body: "coucou je teste l'envoi de mail"
    }).then(
        message => alert(message)
    )
});