const body = document.body;
function sizeControl() {
    const width = window.innerWidth;
    if(width>=800){
        body.style.background = "#EEBC12";
    } else if(width > 500){
        body.style.background = "#914EAD";
    }else {
        body.style.background = "#2E8CD5";
    }
}

function init() {
    window.addEventListener("resize", sizeControl);
}

init();