function applyColor(color){
    document.body.style.setProperty('--main-color', color);
  }
document.body.style.backgroundColor = 'red'; 
document.body.style.backgroundColor = '';
document.body.className = 'red'; 
document.body.className = ''; 
document.body.classList.add('blue'); 
document.body.classList.remove('blue'); 

function showMessage(){
  let value = document.querySelector('select').value;
  alert(value);
}