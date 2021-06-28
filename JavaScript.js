//Zadanie 1 (Hello JavaScript)

function zadanie1() {
    alert('«Я JavaScript!»');

    alert("Я JavaScript!");
}






function test() {
    let name = prompt('Take a login');

    if (name == 'Admin') {

        let password = prompt('Take a password');

        if (password == 'admin') {
            alert('You Big Boss!');
        } else if (password == '' || password == null) {
            alert('escape');
        } else {
            alert('pls true again');
        }

    } else if (name == '' || name == null) {
        alert('Otmena');
    } else {
        alert("I dont know you!");
    }

}
test();








