//Zadanie 1 (Hello JavaScript)

function zadanie1() {
    alert('«Я JavaScript!»');

    alert("Я JavaScript!");
}



// Zadanie 2 (variables)

function zadanie2() {
    let name = "Jon";
    let admin;
    admin = name;

    alert(admin);
    console.log(admin)
}

//Zadanie 3 (Data types)  co bd pokazywac ten alert?

function zadanie3() {
    let name2 = "Ilya";

    alert(`hello ${1}`); //  hello 1

    alert(`hello ${"name2"}`); // hello name2

    alert(`hello ${name2}`); // hello Ilya
}


//Zadanie 4 (alert, prompt, confirm) 

function zadanie4() {
    let howYourName = prompt("How your name");
    alert(`Your name ${howYourName}`)
}

//Zadanie 5 (Basic operators, mathematics)

// function zadanie5() {
//     let a = 1, b = 1;// a = b =2
//     let c = ++a; //  c = 2
//     let d = b++; //  d = 1


//     let z = 2;
//     let x = 1 + (z *= 2); // x = 5 сначал делаем операции в скробках потом приступаем к остальным;


//     let a = prompt("Первое число?", 1);// исправить ошибку
//     let b = prompt("Второе число?", 2);
//     alert(+a + +b);



//     "" + 1 + 0 // 1
//     "" - 1 + 0// -1
//     true + false // 1
//     6 / "3" // 2
//     "2" * "3"// 6
//     4 + 5 + "px"// 9px
//     "$" + 4 + 5// $9
//     "4" - 2 // 2
//     "4px" - 2 // Nan
//     7 / 0 //Infinity
//     "  -9  " + 5 // -90
//     "  -9  " - 5 // -14
//     null + 1 // 1
//     undefined + 1 //Nan
//     " \t \n" - 2 // -2

// }

//Zadanie 6 (Comparison operators)

function zadanie6() {
    5 > 4 // true
    "ананас" > "яблоко" // true - (false)
    "2" > "12" // true
    undefined == null //true
    undefined === null // false
    null == "\n0\n" //false
    null === +"\n0\n"//false
}

//Zadanie 7(if else ?)

// function zadanie7() {
//     let quesion = prompt("Какое «официальное» название JavaScript?");
//     let message = (quesion == "ECMAScript") ? alert("COrrect") : alert("NiePrawda");


//     let sido = prompt("take your number");
//     let mesage = alert();
//     if (sido > 0) {
//         mesage = "1"
//     } else if (sido < 0) {
//         mesage = "-1";
//     } else {
//         mesage = "0";
//     }

//     let login = prompt("write your Login");
//     let message = (login == "Sos") ? alert("Privet") :
//         (login == "Dur") ? alert("Zdrastwujte") :
//             (login == "") ? alert("NieMasz") :
//                 alert("");
// }

//Zadanie 8(|| && !)

function zadanie8() {

    let age = prompt("number?");
    if (age >= 14 && age <= 90 && alert("V diapozone"));


    let login = prompt("Login?");
    if (login == "Admin") {
        let password = prompt("Password?");
        if (password == "ImBoss") {
            alert("witam Pana");
        } else if (pass == " " || pass == null) {
            alert("cancle ");
        } else {
            alert("Uncorect Password!");
        }
    } else if (login == " " || login == null) {
        alert("cancle login");
    } else {
        alert("I did know you");
    }

}

//Switch if zadanie


function SwitchIf() {


    setInterval(function () {
        let messageInput = document.getElementById('message')
        window.alert(messageInput.value)
    }, 7000);

    let xae = prompt("Number Push");
    switch (xae) {
        case "2":
            alert('OFf');
            break;

        case "3":
        case "5":
            alert('maybe letter');
            alert('buyy');
            break;
        default:
            alert("poszzel nahuj)")
    }


    let x = prompt("Browser?");
    if (x == "Edge") {
        alert("You've got the Edge!");
    } else if (x == "Chrome"
        || x == "Safari"
        || x == "Firefox"
        || x == "Opera") {
        alert('Okay we support these browsers too');
    } else {
        alert('We hope that this page looks ok!');
    }

    let a = prompt('Введите число между 0 и 3', '');
    switch (a) {
        case '0':
            alert('Вы ввели число 0');
            break;
        case '1':
            alert('Вы ввели число 1');
            break;

        case '2':
        case '3':
            alert('Вы ввели число 2, а может и 3');
            break;
        default:
            alert('SoSoSorry');
    }


}


//Functions 
let userName = 'Вася';

function showMessage() {
    userName = "Петя";
    let message = 'Привет, ' + userName;

    alert(message);

}

alert(userName);

showMessage();

alert(userName)