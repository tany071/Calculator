(function(){

    let screen= document.querySelector('.window');
    let buttons= document.querySelectorAll('.btn');
    let equal= document.querySelector('.button3');
    let clear= document.querySelector('.button4');
    let theme= document.querySelectorAll('.theme')

    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
            let value = e.target.innerHTML;
            screen.value += value
        })
    });
    
    equal.addEventListener('click',function(e){
        if(screen.value === ''){
            screen.value="Please Enter";
        }else{
            let answer=eval(screen.value);
            screen.value = answer;
        }
    });

    clear.addEventListener('click',function(e){
        screen.value="";
    })

    theme.forEach(function(theme){
        theme.addEventListener('click',function(e){
            let temp=e.target.innerHTML;
            if(temp=dark){
                
            }
        })
    })

})();