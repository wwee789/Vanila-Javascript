const Countries = document.querySelector(".js-countries");
const CURRENT = "country"

function set(){
    const Values = Countries.options[Countries.selectedIndex].value;
    localStorage.setItem( CURRENT, Values);
}
function refresh() {
    const current = localStorage.getItem(CURRENT);
    if(current !== null){
        Countries.value = current;
        
    }
}
function init(){
    Countries.addEventListener("change" , set);
}
init();
refresh();