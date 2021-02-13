// //Functions 
let userName = 'Вася';

function showMessage1() {
    userName = "Петя";
    let message = 'Привет, ' + userName;

    alert(message);

}


function showMessage(from, text) {
    if (text === undefined) {
        text = "no text";
    }
    console.log(from + ":" + text);


}

function checkAge(newYear) {
    if (newYear > 18) {
        return true;
    } else {
        return false;
    }



}
console.log(checkAge(19));