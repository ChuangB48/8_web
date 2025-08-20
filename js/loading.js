if(document.cookie.split('=')[1]==0){
    document.cookie='inform=0=0=0';
    window.location.href='web.html';
}
else if(document.cookie.split('=')[1]>=9){
    document.cookie='inform=999=0='+document.cookie.split('=')[3];
    window.location.href='end.html';
}
else{
    if(Math.random()<0.6){
        let ran=0;
        while(true){
            ran=Math.ceil(Math.random()*levels);
            let p=document.cookie.split('=')[3].split(',');
            let z=true;
            for(let a=0;a<p.length;a++){
                if(p[a]==ran){
                    z=false;
                }
            }
            if(z){
                break;
            }
        }
        document.cookie='inform='+document.cookie.split('=')[1]+'='+ran.toString()+'='+document.cookie.split('=')[3]+','+ran.toString();
        window.location.href='web'+ran.toString()+'.html';
    }
    else{
        document.cookie='inform='+document.cookie.split('=')[1]+'=0='+document.cookie.split('=')[3];
        window.location.href='web.html';
    }
}