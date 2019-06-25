window.onload = function(){

    const memeForm      = document.getElementById("memeForm");
    const memeDisplay   = document.getElementById("display");

    // submit new meme
    memeForm.addEventListener("submit", function(){
        event.preventDefault();
        
        let topText         = document.createElement("h2");
        let bottomText      = document.createElement("h2");
        let newDiv          = document.createElement("div");
        let pic             = document.getElementById("newImage").value;
        let removeButton    = document.createElement("button");
        
        newDiv.className        = "meme";
        topText.className       = "topText";
        bottomText.className    = "bottomText";
        removeButton.className  = "removeButton";
        removeButton.innerText  = "X";
        
        newDiv.style.backgroundImage    = "url(\"" + pic + "\")";
        topText.innerText               = document.getElementById("newTopText").value;
        bottomText.innerText            = document.getElementById("newBottomText").value;

        newDiv.appendChild(topText);
        newDiv.appendChild(bottomText);
        newDiv.appendChild(removeButton);
        memeDisplay.appendChild(newDiv); 
        
        memeForm.reset();

    });

    // remove meme
    memeDisplay.addEventListener("click", function(){
        if(event.target.tagName.toLowerCase() === "button"){
            event.target.parentNode.remove();
        }
    })
}