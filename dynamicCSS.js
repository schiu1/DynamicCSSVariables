function Check(){
    const user = document.getElementById("userBox").value;
    const pass = document.getElementById("passBox").value;
    console.log(user);
    console.log(pass);
    if(user == "testuser"){
        if(pass == "mypassword"){
            console.log("success");
        }
        else{
            console.log("failed. wrong password.");
            document.documentElement.style.setProperty('--passbox-color', 'pink');
        }
    }
    else{
        console.log("failed. wrong username.");
        document.documentElement.style.setProperty('--userbox-color', 'pink');
    }
}

function Cancel(){
    document.documentElement.style.setProperty('--userbox-color', 'white');
    document.documentElement.style.setProperty('--passbox-color', 'white');
    document.getElementById("userBox").value = "";
    document.getElementById("passBox").value = "";
}