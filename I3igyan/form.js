function Onsubmit(event){
    
    var name =document.getElementById('name').value
    event.preventDefault();
    
}
window.onload=function(){
    document.getElementById('Contactform').addEventListener('submit',Onsubmit);
}