//Zadanie 7(if else ?)

function zadanie7() {
    let quesion = prompt("Какое «официальное» название JavaScript?");
    let message = (quesion == "ECMAScript") ? alert("COrrect") : alert("NiePrawda");


    let sido = prompt("take your number");
    let mesage = alert();
    if (sido > 0) {
        mesage = "1"
    } else if (sido < 0) {
        mesage = "-1";
    } else {
        mesage = "0";
    }

    let login = prompt("write your Login");
    let message = (login == "Sos") ? alert("Privet") :
        (login == "Dur") ? alert("Zdrastwujte") :
            (login == "") ? alert("NieMasz") :
                alert("");
}
