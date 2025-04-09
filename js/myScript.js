var counter = 1;
setInterval(function (){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 5000)

let popUp = document.getElementById("cookiePopup");
console.log(popUp);
//When user clicks the accept button
document.getElementById("acceptCookie").addEventListener("click", () => {
    //Create date object
    let d = new Date();
    //Increment the current time by 1 minute (cookie will expire after 1 minute)
    d.setDate(365 + d.getDay());
    //Create Cookie withname = myCookieName, value = thisIsMyCookie and expiry time=1 minute
    document.cookie = "myCookieName=thisIsMyCookie; expires = " + d + ";";
    //Hide the popup
    popUp.classList.add("hide");
    popUp.classList.remove("show");
});
//Check if cookie is already present
const checkCookie = () => {
    //Read the cookie and split on "="
    let input = document.cookie.split("=");
    //Check for our cookie
    if (input[0] == "myCookieName") {
        //Hide the popup
        console.log("found cookie");
        popUp.classList.add("hide");
        popUp.classList.remove("show");
    } else {
        //Show the popup
        console.log("found no cookie");
        popUp.classList.add("show");
        popUp.classList.remove("hide");
    }
};
//Check if cookie exists when page loads
window.onload = () => {
    setTimeout(() => {
        checkCookie();
    }, 500);
};