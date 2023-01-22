const username = document.getElementById('username');
const signUp = document.getElementById('sign-up');

const adminUsers = [ 'lara','kennie','precious','karo'];


function onSignUp() {
    const name = username.value.toLowerCase();

    if(name === adminUsers[0]
        || name === adminUsers[1]
        || name === adminUsers[2]
        || name === adminUsers[3]) {
            alert('You\'re an Admin')
        }
        else {
            alert('You\'re a Client')
        }
}
signUp.addEventListener('click', onSignUp);