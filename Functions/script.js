// //Functions 
let userName = 'Вася';

function showMessage1() {
    let userName = "Петя";
    let message = 'Привет, ' + userName;

    alert(message);

}
showMessage1();
alert(userName);


function showMessage(from, text) {
    if (text === undefined) {
        text = "no text";
    }
    console.log(from + ":" + text);


}
showMessage('putler', 'hujsosi');
showMessage('rus', 'idi nahuj');

function showMessage2(from2,text2){
    from2 = '*' + from2 + '*';
    alert(from2 + ':' + text2);

}
let from2 = "Ania";
showMessage2(from2,"hi");

alert(from2);

function checkAge(newYear) {
    if (newYear > 18) {
        return true;
    } else {
        return false;
    }



}
console.log(checkAge(19));

