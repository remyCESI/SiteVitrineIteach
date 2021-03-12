$('#btnForm').click(function() {
    FEmail = $('#fEmail').val()
    FObjet = $('#Objet').val()
    FMessage = $('#message').val()
    if (FEmail.length > 10 && FMessage.length > 30) {
        Email.send({
            SecureToken: "783fd4a8-9fa7-4e3e-a759-0f34b371d4cf",
            To: 'iteachasso@gmail.com',
            From: "iteachasso@gmail.com",
            Subject: "test envoie de mail",
            Body: "Hello la team, nous avons reçu un mail de " + FEmail + " ,concernant " + FObjet + " .Son message est le suivant: " + FMessage
        }).then(
            message => alert(message)
        )
    } else {
        alert("Veuillez bien renseigner les champs du formulaire")
    }

});