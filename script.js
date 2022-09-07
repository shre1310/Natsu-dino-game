const natsu = document.getElementById("natsu");

function jump(){
  if(natsu.classlist != "jump"){
   natsu.classList.add("jump");

   setTimeout(function() {
     natsu.classList.remove("jump");
   },300);
}
}

document.addEventListener("keydown", function(event){
  jump();
});

// document.addEventListener('DOMcontentloade')