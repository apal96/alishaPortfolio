function viewHomepage(){
    document.location.replace("/");
}
function viewWork(){
    document.location.replace("/work");
}
document.querySelector("#about-me").addEventListener("click", viewHomepage);
document.querySelector("#work").addEventListener("click", viewWork);
