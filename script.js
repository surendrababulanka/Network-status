let connection = document.getElementById("connection");
var container = document.querySelector(".container")

let Onlinemessage = () => {
    container.classList.add("on");
    
    connection.textContent = "internet connection available";
    connection.style.cssText = "background-color:green;color:white;padding:10px;border-radius:7px";
};
let Offlinemessage = () => {
    connection.textContent = "No internet Connection";
    connection.style.cssText = "background-color:#ffdde0;color:#d32f2f;padding:10px;border-radius:7px";
};

if (window.navigator.onLine) {
    Onlinemessage();
} else {
    Offlinemessage();
}

window.addEventListener("online", Onlinemessage);
window.addEventListener("offline", Offlinemessage);