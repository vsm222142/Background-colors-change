
let ButtonEle=document.querySelectorAll(".box");

let bodyEle=document.querySelector("body");

ButtonEle.forEach(function(box){
    box.addEventListener('click',(box)=>{
    if(box.target.id==='box1'){
        bodyEle.style.background="red";
    }
    })

    box.addEventListener('click',(box)=>{
        if(box.target.id==='box2'){
            bodyEle.style.background="#328E6E";
        }
        })

    box.addEventListener('click',(box)=>{
      if(box.target.id==='box3'){
                bodyEle.style.background="#FCB454";
         }
    })

    box.addEventListener('click',(box)=>{
        if(box.target.id==='box4'){
                    bodyEle.style.background="#7D0A0A";
                }
             })

     box.addEventListener('click',(box)=>{
        if(box.target.id==='box5'){
                        bodyEle.style.background="pink";
            }
        })
})