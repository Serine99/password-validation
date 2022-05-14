function validate () {
    const password = document.getElementById('password');
    const upper = document.getElementById('upper');
    const lower = document.getElementById('lower');
    const number = document.getElementById('number');
    const length = document.getElementById('length');
    const char = document.getElementById('char');
    if (password.value.match(/[0-9]/)){
        number.style.color = 'green'
    } else { number.style.color = 'red'};
    if (password.value.match(/[A-Z]/)){
        upper.style.color = 'green'
    } else { upper.style.color = 'red'}

    if (password.value.match(/[a-z]/)){
        lower.style.color = 'green'
    } else { lower.style.color = 'red'}

    if (password.value.match(/[!\@\#\$\%\^\&\*]/)){
        char.style.color = 'green'
    } else { char.style.color = 'red'}

    if (password.value.length >= 8 && password.value.length <=16 ){
        length.style.color = 'green'
    } else { length.style.color = 'red'}


}