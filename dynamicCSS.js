function Check(){
    const user = document.getElementById("userBox").value;
    const pass = document.getElementById("passBox").value;
    console.log(user);
    console.log(pass);
    
    if(user != "testuser"){
        console.log("wrong username.");
        if(user.indexOf(" ") != -1){
            document.documentElement.style.setProperty('--userbox-color', 'lightyellow');
        }
        else{
            document.documentElement.style.setProperty('--userbox-color', 'pink');
        }
    }
    else{
        document.documentElement.style.setProperty('--userbox-color', 'white');
    }
    
    if(pass != "mypassword"){
        console.log("wrong password.");
        if(pass.indexOf(" ") != -1){
            document.documentElement.style.setProperty('--passbox-color', 'lightyellow');    
        }
        else{
            document.documentElement.style.setProperty('--passbox-color', 'pink');
        }
    }
    else{
        document.documentElement.style.setProperty('--passbox-color', 'white');    
    }
    
    const root = document.querySelector(':root');
    const userColor = getComputedStyle(root).getPropertyValue('--userbox-color');
    const passColor = getComputedStyle(root).getPropertyValue('--passbox-color');

    switch(userColor){
        case 'lightyellow':
            document.getElementById("userWarningMsg").style.display = 'block';
            document.getElementById("userErrorMsg").style.display = 'none';
            break;
        case 'pink':
            document.getElementById("userErrorMsg").style.display = 'block';
            document.getElementById("userWarningMsg").style.display = 'none';
            break;
        default:
            document.getElementById("userWarningMsg").style.display = 'none';
            document.getElementById("userErrorMsg").style.display = 'none';
    }

    switch(passColor){
        case 'lightyellow':
            document.getElementById("passWarningMsg").style.display = 'block';
            document.getElementById("passErrorMsg").style.display = 'none';
            break;
        case 'pink':
            document.getElementById("passErrorMsg").style.display = 'block';
            document.getElementById("passWarningMsg").style.display = 'none';
            break;
        default:
            document.getElementById("passWarningMsg").style.display = 'none';
            document.getElementById("passErrorMsg").style.display = 'none';
    }
    
}

function Cancel(){
    document.documentElement.style.setProperty('--userbox-color', 'white');
    document.documentElement.style.setProperty('--passbox-color', 'white');
    document.getElementById("userBox").value = "";
    document.getElementById("passBox").value = "";
    document.getElementById("userWarningMsg").style.display = 'none';
    document.getElementById("userErrorMsg").style.display = 'none';
    document.getElementById("passWarningMsg").style.display = 'none';
    document.getElementById("passErrorMsg").style.display = 'none';
}