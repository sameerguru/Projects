                                //Login show and hidden


const signup = document.getElementById("sign-up");
const signin = document.getElementById("sign-in");
const login = document.getElementById("log-in");
const logup = document.getElementById("log-up");

signup.addEventListener('click',()=>{

    //Remove the classes
    login.classList.remove('block');
    logup.classList.remove('none');

    //add the classes

    login.classList.toggle('none');
    logup.classList.toggle('block');
})


signin.addEventListener('click',()=>{

    //Remove the classes
    logup.classList.remove('block');
    login.classList.remove('none');

    //add the classes

    logup.classList.toggle('none');
    login.classList.toggle('block');
})