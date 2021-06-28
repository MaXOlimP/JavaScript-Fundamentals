function zadanie1() {
    alert(null || 2 || undefined); // 2
}

function zadanie2() {
    alert(alert(1) || 2 || alert(3)); // сначала выведет 1  потом 2 так как вызов alert(1) приведет в undefined и пойдет дальше искать истеное значение , которым являетться 2
}

function zadanie3() {
    alert(1 && null && 2); // null
}

function zadanie4() {
    alert(alert(1) && alert(2)); //после проверки  alert(1)  вывод будет 1 и дальше не пойдет так как alert(1)= undefined = ложное значение
}

function zadanie5() {
    alert(null || 2 && 3 || 4); // 3
}

function zadanie6() { //Проверка значения из диапазона
    let age = prompt('What your age?');
    let minAge = 14;
    let maxAge = 90;

    if (age >= minAge && age <= maxAge) {
        alert('Na mestie');
    } else {
        alert('SOsoSORy')
    }
}

function zadanie7() { //Проверка значения вне диапазона
    let age = prompt('What your age?');
    let minAge = 14;
    let maxAge = 90;

    if (!(age >= minAge && age <= maxAge)) {
        alert('Wnie Diapazona');
    } else {
        alert('SOsoSORy')
    }
}

function zadanie8() { // Вопрос о "if"
    if (-1 || 0) alert('first'); //true
    if (-1 && 0) alert('second'); //false
    if (null || -1 && 1) alert('third'); //true
}

function zadanie9() {

    let login = prompt('Give me pls login!', '');

    if (login == 'Admin') {

        let passwd = prompt('Give a password!', '');

        if (passwd == 'admin') {
            alert('Im Big Bos');
        } else if (passwd == '' || passwd == null) {
            alert('Отменено');
        } else {
            alert('Неверный пароль');
        }

    } else if (login == '' || login == null) {
        alert('Otmena');
    } else {
        alert("I dont know you!");
    }


}
