//Switch if zadanie


function SwitchIf() {


    // setInterval(function () {
    //     let messageInput = document.getElementById('message')
    //     window.alert(messageInput.value)
    // }, 7000);



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
