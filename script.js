'use strict';


const homeNavButton = document.querySelector('.home');
const signInNavButton = document.querySelector('.signin');
const BodySignIn = document.querySelector('.body');
const SignIn = document.querySelector('.sign-in-default');


let AddSignInAndRemoveBody = () => {

    // Shows web page
    BodySignIn.classList.add('default-');
    SignIn.classList.remove('default-');

    // Adds user interface NAV
    homeNavButton.classList.remove('default');
    signInNavButton.classList.add('default');


}



let AddBodyAndRemoveSignIn = () => {

    // Shows web page
    BodySignIn.classList.remove('default-');
    SignIn.classList.add('default-');

    // Adds user interface
    homeNavButton.classList.add('default');
    signInNavButton.classList.remove('default');

}



signInNavButton.addEventListener('click', () => {
    AddSignInAndRemoveBody();
})


homeNavButton.addEventListener('click', () => {
    AddBodyAndRemoveSignIn();
}
)





