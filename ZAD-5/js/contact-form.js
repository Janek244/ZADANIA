$(document).ready(function() {

    var formErrors = new Map([
        ["name", true],
        ["email", true],
        ["tel", true],
        ["text", true]
    ]);

    //Walidacja Nazwy
    $("#name").on("blur", function() {
        var input = $(this);
        var nameLength = input.val().length; 

        if (!(nameLength >= 4 && nameLength <= 15)) {
            alert("Nazwa musi mieć więcej niż 4 i mniej niż 16 znaków!");
            formErrors.set("name", true);
        } else {
            formErrors.set("name", false);
        }

    });

    //Walidcja Emaila
    $("#email").on("blur", function() {
        var input = $(this);
        var regEmail = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/;
        var isEmail = regEmail.test(input.val());

        if (!isEmail) {
            alert("Wprowadzono niepoprawny email.");
            formErrors.set("email", true);
        } else {
            formErrors.set("email", false);
        }
    });

    //Walidacja nr. tel
    $("#tel").on("blur", function() {
        var input = $(this);
        var regTel = /^\+[0-9 ]{14}$|^[0-9 ]{11}$|^\+[0-9]{11}$|^[0-9]{9}$/;
        var isTel = regTel.test(input.val());

        if (!isTel) {
            alert("Wprowadzono niepoprawny numer telefonu.");
            formErrors.set("tel", true);
        } else {
            formErrors.set("tel", false);
        }
    });

    //Walidacja pola tekstowego
    $("#text").on("blur", function() {
        var input = $(this);
        var text = input.val();
        
        if (!text) {
            alert("Pole musi zawierać tekst");
            formErrors.set("text", true);
        } else {
            formErrors.set("text", false);
        }       
    });

    $("#submit").click(function(event) {
        //Licznik błędów
        var errorsValue = 0;
        formErrors.forEach(function(value, key) {
            if (value == true) {
                errorsValue++;
            }
        });

        //Wysyłanie formularza
        if (errorsValue == 0) {
            alert("Pomyślnie wysłano formularz");
        } else {
            event.preventDefault();
            alert("Błędny formularz");
        }
    });
});