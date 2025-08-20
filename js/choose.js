let cook=(parseInt(document.cookie.split('=')[1])+1).toString()+'='+document.cookie.split('=')[2]+'='+document.cookie.split('=')[3];
function correct(){
    if(document.cookie.split('=')[1]==999){
        document.cookie='inform=999=0='+document.cookie.split('=')[3]+','+document.cookie.split('=')[2];
        window.location.href='end.html';
    }
    else{
        document.cookie='inform='+cook;
        window.location.href='loading.html';
    }
}
function wrong(){
    if(document.cookie.split('=')[1]==999){
        window.location.href='end.html';
    }
    else{
        document.cookie='inform=0=0=0';
        window.location.href='loading.html';
    }
}