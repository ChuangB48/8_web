document.oncontextmenu=()=>{
    return false;
}
document.onkeydown=e=>{
    if(e.key==='F12'){
        e.preventDefault();
        return false;
    }
}