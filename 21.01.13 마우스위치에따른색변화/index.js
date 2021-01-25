const title = document.querySelector("#title");
const color = ["red", "blue", "green", "pink"];

const superEventHandler = {
    mouseOver : function() {
        title.innerHTML = "The mouse is here!!";
        title.style.color = color[0];
    },
    mouseOut : function() {
        title.innerHTML = "The mouse is gone!!";
        title.style.color = color[1];
    },
    resize : function() {
        title.innerHTML = "You just resized!!";
        title.style.color = color[2];
    },
    contextmenu : function () {
        title.innerHTML = "That was a right Click!!";
        title.style.color = color[3];
    }
};

title.addEventListener("mouseover", superEventHandler.mouseOver);
title.addEventListener("mouseout", superEventHandler.mouseOut);
window.addEventListener("resize", superEventHandler.resize);
window.addEventListener("contextmenu", superEventHandler.contextmenu);