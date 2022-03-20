const HIDDEN_CLASS = 'hidden';
const userLoginCon = document.querySelector('#userLoginCon');
const userInfoCon = document.querySelector('#userInfoCon');

function setUserInfo(){
    const userInfoText = userInfoCon.querySelector('h1');
    const todoUserName = document.querySelector('.userName');
    const userName = localStorage.getItem('userName');
    userInfoText.innerText = `Hello ${userName}`;
    todoUserName.innerText = `${userName}`;
    showUserCon('info');
}

function showUserCon(type){
    if( type == 'login' ){
        userInfoCon.classList.add(HIDDEN_CLASS);
        userLoginCon.classList.remove(HIDDEN_CLASS);
        todoListCon.classList.add(HIDDEN_CLASS);
    }else if( type == 'info' ){
        userInfoCon.classList.remove(HIDDEN_CLASS);
        userLoginCon.classList.add(HIDDEN_CLASS);
        todoListCon.classList.remove(HIDDEN_CLASS);
    }
}

function getUserInfo(){
    const userNameInput = userLoginCon.querySelector('input[name="user_name"]');
    localStorage.setItem('userName', userNameInput.value);
    showUserCon('info');
}

function isLogin(){
    if( localStorage.getItem('userName') ){
        // has user information
        setUserInfo();
    }else{
        showUserCon('login');
        userLoginCon.addEventListener('submit', getUserInfo);
    }
}

isLogin();
