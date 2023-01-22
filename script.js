const username = document.getElementById('username');
const signUp = document.getElementById('sign-up');

//Store the admin usernames in an array
const adminUsers = [ 'lara','kennie','precious','karo'];

function onSignUp() {
    //Stores the inputed username
    const name = username.value.toLowerCase();

    //Checks if the username is in admin array
    if(name === adminUsers[0]
        || name === adminUsers[1]
        || name === adminUsers[2]
        || name === adminUsers[3]) {
            //Alerts this if the username is in the admin array
            alert('You\'re an Admin')
        }
        else {
            //Alerts this if it is not in the admin array
            alert('You\'re a Client')
        }
}
signUp.addEventListener('click', onSignUp);