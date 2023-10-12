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
            console.log("failed");
        }
    }
    else{
        console.log("failed");
    }
}