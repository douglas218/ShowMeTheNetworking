function exitPopup(event) {
    // Remove this event listener
    document.removeEventListener("mouseout", exitPopup);
  
    // Show the popup
    document.getElementById("popup").style.display = "flex";
  }
  
  document.addEventListener("mouseout", exitPopup);


//para fechar o popup quando clicar no X
  document.getElementById("close-popup").addEventListener("click", function(){
    document.getElementById("popup").style.display = "none";
  });