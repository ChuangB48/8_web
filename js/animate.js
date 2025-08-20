let eight=document.getElementById('eight').style;
let web=document.getElementById('web').style;
window.setTimeout(()=>{
    eight.color='white';
},1000);
window.setTimeout(()=>{
    web.color='white';
},2000);
window.setTimeout(()=>{
    eight.color='black';
    web.color='black';
},2500)
window.setTimeout(()=>{
    eight.color='red';
    web.color='red';
},3000);
document.cookie='inform=0=0=0';
window.setTimeout(()=>{
    window.location.href='loading.html';
},6000);