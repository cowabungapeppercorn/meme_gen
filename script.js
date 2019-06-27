window.onload = function(){

    const memeForm      = document.getElementById("memeForm");
    const memeDisplay   = document.getElementById("display");
    let savedMemes      = JSON.parse(window.localStorage.getItem("memes")) || [];


    // generate memes from localStorage
    for(let i = 0; i < savedMemes.length; i++){
        let newDiv = document.createElement("div");
        let bottomText = document.createElement("h2");
        let topText = document.createElement("h2");
        let removeButton = document.createElement("button");
        newDiv.className = "meme";
        topText.className = "topText";
        bottomText.className = "bottomText";
        removeButton.className = "removeButton";
        removeButton.innerText = "X";
        newDiv.style.backgroundImage = savedMemes[i].background;
        topText.innerText = savedMemes[i].top;
        bottomText.innerText = savedMemes[i].bottom;
        newDiv.appendChild(topText);
        newDiv.appendChild(bottomText);
        newDiv.appendChild(removeButton);
        memeDisplay.appendChild(newDiv);
    }

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
        
        // save to local storage
        savedMemes.push({top: topText.innerText, bottom: bottomText.innerText, background: newDiv.style.backgroundImage});
        window.localStorage.setItem("memes", JSON.stringify(savedMemes));
        
        memeForm.reset();

    });

    // remove meme
    memeDisplay.addEventListener("click", function(){
        if(event.target.tagName.toLowerCase() === "button"){
            for(let i = 0; i < savedMemes.length; i++){
                if(event.target.parentNode.style.backgroundImage === savedMemes[i].background){
                    savedMemes.splice(i, 1);
                    window.localStorage.setItem("memes", JSON.stringify(savedMemes));
                }
            }
            event.target.parentNode.remove();
        }
    })
}