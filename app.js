const value = document.querySelector('#value');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');

decrease.addEventListener('click', decreaseFun);
reset.addEventListener('click', resetFun);
increase.addEventListener('click', increaseFun);


let count = 0

function colorDefine(){
  if (count > 0) {
    value.style.color = "green"
  } else if(count < 0){
    value.style.color = "red"
  }else{
    value.style.color = "#000"
  }
}


function decreaseFun(){
  count = count-1;
  value.textContent = count;
  colorDefine();
}

function resetFun(){
  count = 0;
  value.textContent = count;
  colorDefine();
}

function increaseFun(){
  count = count+1;
  value.textContent = count
  colorDefine();
}