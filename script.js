const username = document.getElementById('username');
const signUp = document.getElementById('sign-up');

const adminUsers = [ 'Lara','Kennie','Precious','Karo'];


function onSignUp() {
    const name = username.value;
    // console.log(name);
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