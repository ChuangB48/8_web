document.getElementById('title').innerText+='第'+document.cookie.split('=')[1]+'代';
if(document.cookie.split('=')[1]==0){
    document.getElementById('title').innerText+='(參考用，無異常)';
}