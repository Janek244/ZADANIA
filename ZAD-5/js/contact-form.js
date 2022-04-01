var form = document.querySelector("form")

var formName = document.querySelector("#name");
var email = document.querySelector("#email");
var tel = document.querySelector("#tel");
var text = document.querySelector("#text");

let formErrors = [];

form.addEventListener("submit", e => {
    e.preventDefault();

    //Walidacja Imienia 
    const regName = /[A-Z][a-z]+\s+[A-Z][a-z]/;
    if (!regName.test(formName.value)) {
        formErrors.push("Wypełnij poprawnie pole ze swoją nazwą");
    }

    //Walidacja maila
    const regEmail = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/;
    if (!regEmail.test(email.value)) {
        formErrors.push("Wypełnij poprawnie pole z emailem");
    }
    
    //Walidacja numeru tel
    const regTel = /^\+[0-9 ]{14}$|^[0-9 ]{11}$|^\+[0-9]{11}$|^[0-9]{9}$/;
    if (!regTel.test(tel.value)) {
        formErrors.push("Wypełnij poprawnie pole z numerem telefonu");
    }

    //Walidacja pola tekstowego 
    const regText = /\w/;
    if (!regText.test(text.value)) {
        formErrors.push("Wypełnij poprawnie pole tekstowe");
    }

    //Sprawdzenie ilości błędów
    if (formErrors != 0) {
        alert(formErrors);
        formErrors = [];
    } else {
        alert("brak błędów");
    }

});
