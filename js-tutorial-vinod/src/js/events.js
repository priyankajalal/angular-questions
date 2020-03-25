// Event Bubbling and capturing video
// https://www.youtube.com/watch?v=sfKDOOJgbSI

// By default, every element of HTML is child of the window object.

document.addEventListener("DOMContentLoaded", function(){
    // Handler when the DOM is fully loaded
    onLoad();
  });

  function onLoad(){
      /*
Summary:
    addEventListener can add multiple events, whereas with onclick this cannot be done.
    
    onclick can be added as an HTML attribute, whereas an addEventListener can only 
    be added within <script> elements.
    
    addEventListener can take a third argument which can stop the event propagation.
    
    Both can be used to handle events. However,addEventListener should be the 
    preferred choice since it can do everything 
    onclick does and more. Don't use inline onclick as HTML attributes as this 
    mixes up the javascript 
    and the HTML which is a bad practice. It makes the code less maintainable.

      */

      let btn1= document.getElementById("btn1");
      let parent1= document.getElementById("parent1");
      let p1 = document.getElementById("p1");
      let p2 = document.querySelector("#p2");
      /*btn1.addEventListener("click", function(){ 
        p1.innerText = "GeeksforGeeks"; 
        });*/
     // btn1.onclick = ()=> { p2.innerText = "clicked with click"; }
     // btn1.onclick = ()=> { p3.innerText = "clicked with click"; }
     fn1= ()=>
     { 
       p3.innerText = "Clicked with addEventListener"
       console.log("child clicked")
     };
     fn2 = ()=> { p2.innerText = "Clicked with addEventListener 2"};
     // true sets for event capturing , default is bubbling (down to up)
      btn1.addEventListener('click', fn1,true);
      parent1.addEventListener('click', ()=>{console.log("parent clicked")},true);
      btn1.addEventListener('click', fn2);
      $("#btn2").click(()=>{console.log("I am clicked using jquery click")})
     //btn1.removeEventListener('click',fn1)
    
  
  }
  function clickMe(){
    document.getElementById("p1").innerText = "I m clicked"; 
  }

