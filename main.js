function validateUserName(){
    const userName = document.getElementById('username');
    const lower0 =  document.getElementById('lower0');
    const number0 = document.getElementById('number0');
    const length0 = document.getElementById('length0');
    if (userName.value.match(/^([a-z])*$/)){
        lower0.style.color = 'green'
    } else {lower0.style.color = 'red' }
    if (userName.value.match(/[0-9]/)){
        number0.style.color = 'green'
    } else {number0.style.color = 'red' }
    if (userName.value.length >= 3 && userName.value.length<= 20 ){
        length0.style.color = 'green'
    } else {length0.style.color = 'red' }
}

function validatePassword() {
    const password = document.getElementById('password');
    const upper = document.getElementById('upper');
    const lower = document.getElementById('lower');
    const number = document.getElementById('number');
    const length = document.getElementById('length');
    const char = document.getElementById('char');
    if (password.value.match(/[0-9]/)){
        number.style.color = 'green'
    } else { number.style.color = 'red'};
    if (password.value.match(/[A-ZԱ-ՖА-Я]/)){
        upper.style.color = 'green'
    } else { upper.style.color = 'red'}

    if (password.value.match(/[a-zа-яա-ֆ]/)){
        lower.style.color = 'green'
    } else { lower.style.color = 'red'}

    if (password.value.match(/[!\@\#\$\%\^\&\*]/)){
        char.style.color = 'green'
    } else { char.style.color = 'red'}

    if (password.value.length >= 8 && password.value.length <=16 ){
        length.style.color = 'green'
    } else { length.style.color = 'red'}

}