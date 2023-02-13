// SINGLE LINE COMMENTS

/* MULTI
  LINE
  COMMENTS */

  let toggle = document.querySelector('.toggle');
  let menu = document.querySelector('.menu');
  let mother = document.querySelector('.mother');
  
  toggle.onclick = function(){
    menu.classList.toggle('active')
    toggle.classList.toggle('active')
    mother.classList.toggle('active')
  };
  