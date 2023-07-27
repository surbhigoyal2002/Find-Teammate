firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("login.html")
    }else{
        document.getElementById("user").innerHTML = "Hello, "+user.email
    }
})

function myFunction() {
    location.assign("option.html")
}

function logout(){
    firebase.auth().signOut()
}