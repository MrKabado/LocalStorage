localStorage.setItem('finder', 0);

let count = localStorage.getItem('count') ? parseInt(localStorage.getItem('count')) : 0;
let finder = localStorage.getItem('finder') ? parseInt(localStorage.getItem('finder')) : 0;

// let count = 0;
// let finder = 0;

let logDisplay = document.getElementById('logDisplay');
let regDisplay = document.getElementById('regDisplay');
//register

function register(event) {
    event.preventDefault();

    let typepass = document.getElementById('pass').value;
    let confirmpass = document.getElementById('confirm-pass').value;
    let typeuser = document.getElementById('user').value;
    let typestudentId = document.getElementById('student-id').value;

    for(let i = 0; i <= localStorage.getItem('count'); i++) {
        if (typeuser === localStorage.getItem(`username${i}`)) {
            regDisplay.innerText = 'this username is already taken';
            regDisplay.style = 'color: crimson; font-size: 10px';

            setTimeout(() => {
                if(regDisplay) {
                    regDisplay.style = 'display: none;';
                } else {
                    regDisplay.style = 'display: block;';
                }
            }, 5000);

            return;
        } else if (typestudentId === localStorage.getItem(`studentID${i}`)) {
            regDisplay.innerText = 'this student ID is already registered';
            regDisplay.style = 'color: crimson; font-size: 10px';

            setTimeout(() => {
                if(regDisplay) {
                    regDisplay.style = 'display: none;';
                } else {
                    regDisplay.style = 'display: block;';
                }
            }, 5000);

            return;
        }
    }

    if (typepass != confirmpass) {
        regDisplay.innerText = "Passwords don't match";     
        regDisplay.style = 'color: crimson; font-size: 10px';  
        
        setTimeout(() => {
            if(regDisplay) {
                regDisplay.style = 'display: none;';
            } else {
                regDisplay.style = 'display: block;';
            }
        }, 5000);
        return;
    }

    count++;
    localStorage.setItem('count', count);

    localStorage.setItem(`username${count}`, document.getElementById('user').value);
    localStorage.setItem(`password${count}`, document.getElementById('pass').value);
    localStorage.setItem(`studentName${count}`, document.getElementById('student-name').value);
    localStorage.setItem(`studentID${count}`, document.getElementById('student-id').value);

    regDisplay.innerText = 'Registered Successfully, Go to Login';
    regDisplay.style = 'color: green; font-size: 10px';

    document.getElementById('pass').value = '';
    document.getElementById('confirm-pass').value = '';
    document.getElementById('user').value = '';
    document.getElementById('student-name').value = '';
    document.getElementById('student-id').value = '';


    setTimeout(() => {
        if(regDisplay) {
            regDisplay.style = 'display: none;';
        } else {
            regDisplay.style = '#2ecc71; display: block;';
        }
    }, 5000);

}

function login(event) {
    event.preventDefault();

    let logUser = document.getElementById('logUser').value;
    let logPass = document.getElementById('logPass').value;
    let userFound = false;

    for (let i = 1; i <= count; i++) {
        console.log(localStorage.getItem(`username${i}`));

        if (logUser === localStorage.getItem(`username${i}`)) {
            userFound = true;

            if (logPass === localStorage.getItem(`password${i}`)) {
                localStorage.setItem('finder',i);

                document.getElementById('logUser').value = '';
                document.getElementById('logPass').value = '';  

                window.alert(`Hello ${localStorage.getItem(`studentName${i}`)}`)             
                window.location.href = '/pages/homepage.html';
                return;
            } else {
                console.log(finder);

                logDisplay.innerText = 'Wrong password';
                logDisplay.style = 'color: crimson; font-size: 10px';

                setTimeout(() => {
                    if (logDisplay) {
                         logDisplay.style = 'display: none';
                    } else {
                        logDisplay.style = 'display: block';
                    }
                }, 5000);
                return;
            }
        } 
    }

        if (userFound === false) {
            logDisplay.innerText = 'couldnt find username';
            logDisplay.style = 'color: crimson; font-size: 10px';

            setTimeout(() => {
                    if (logDisplay) {
                         logDisplay.style = 'display: none';
                    } else {
                        logDisplay.style = 'display: block';
                    }
                }, 5000);
            return;
        }
            
    }

let showIt = false;
function showPass() {
    let logPass = document.getElementById('logPass');

    if (showIt) {
        logPass.type = 'text';
        showIt = false;
    } else {
        logPass.type = 'password';
        showIt = true;
    }
}