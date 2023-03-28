

let input = document.getElementById('password_field')
let button = document.getElementById('password_toggle')
let icon = document.getElementById('password_eye')

button.addEventListener('click', function () {


    if (input.type == 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye-slash')
        icon.classList.add('fa-eye')
    } else {
        input.type = 'password';
        icon.classList.add('fa-eye-slash')
        icon.classList.remove('fa-eye')
    }
})


input.addEventListener('keyup', function () {
    let inputValueLength = input.value.length;     if (inputValueLength >= 8) {
        document.getElementById('password_msg').innerText = 'Strong Password'
        document.getElementById('password_msg').style.color = 'green'
    } else {    document.getElementById('password_msg').innerText = 'Poor Password'
         document.getElementById('password_msg').style.color = 'red'     } })


let mode_changer = document.getElementById('mode_changer');

mode_changer.addEventListener('click', function(){
  document.documentElement.classList.toggle('dark');
})

