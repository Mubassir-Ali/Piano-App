window.addEventListener('load', ()=>{
    const sounds =document.querySelectorAll('.sound');
    const pads =document.querySelectorAll('.pads div');
    const visual = document.querySelector(".visual");
    const color=[
        '#F97F51',
        '#B33771',
        '#BA292E',
        '#E15D3A',
        '#FFA73C',
        '#20bf6b'
    ];



    pads.forEach((pad, index) => {
        pad.addEventListener("click", function() {

            sounds[index].currentTime = 0;
            sounds[index].play();
           
            createBubble(index);
        });
      });

    const createBubble=(index)=>{
        const bubble =document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor=color[index];
        bubble.style.animation=`jump 2s ease`;
        
       
        bubble.addEventListener('animationend',function(){
            visual.removeChild(this);
    });

    }
        
});


