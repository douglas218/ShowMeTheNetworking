/* 
 * EXIT POP-UP 
 */
function exitPopup(event) {
    // Remove this event listener
    document.removeEventListener("mouseout", exitPopup);
  
    // Show the popup
    document.getElementById("popup").style.display = "flex";
}

/* Listener para abrir a exit popup no evento "mouseout" */
document.addEventListener("mouseout", exitPopup);

/* Para fechar o popup quando clicar no X */
document.getElementById("close-popup").addEventListener("click", function(){
    document.getElementById("popup").style.display = "none";
});