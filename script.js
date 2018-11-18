
var golIndex=Math.floor(Math.random() * (4 - 1) ) + 1;
window.onload=function(){
    
    var imagelist=document.getElementsByClassName("aimg");
    for(var i=0;i<3;i++)
    {
        if(golIndex==i+1)
        {
            imagelist[i].addEventListener("click",function(event){
                event.target.classList.add("hide");
                // imagelist[i].classList.add("hide");
            })
        }
        
    }
    
    }

    

    