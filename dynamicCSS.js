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

}

function Cancel(){
    document.documentElement.style.setProperty('--userbox-color', 'white');
    document.documentElement.style.setProperty('--passbox-color', 'white');
    document.getElementById("userBox").value = "";
    document.getElementById("passBox").value = "";
}