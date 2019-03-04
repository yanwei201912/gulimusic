;(function(){
    var btn = document.querySelector("#wrap > .head .head-top .btn");
    var mask = document.querySelector("#wrap > .head .mask");
    var wrap=document.querySelector("#wrap");
    var input = document.querySelector("#wrap > .head .head-bottom form > input[type='text']");
    /*
        isXX XX图标有没有出现
            false:XX图标没有出现
            true: XX图标出现
     */
    var isXX=false;
    btn.addEventListener("touchstart",function(ev){
        ev=ev||event;
        isXX=!isXX;
        if(isXX){
            this.classList.add("active");
            mask.style.display="block";
        }else{
            this.classList.remove("active");
            mask.style.display = "none";
        }
        ev.stopPropagation();
    }) 
    wrap.addEventListener("touchstart",function(){
        if(isXX){
             btn.classList.remove("active");
             mask.style.display = "none";
             isXX = !isXX;
        }
    })
    mask.addEventListener("touchstart",function(ev){
        ev = ev||event;
        ev.stopPropagation();
        //event.stopPropagation() 方法阻止事件冒泡到父元素，阻止任何父事件处理程序被执行
    })

    input.addEventListener("touchstart",function(ev){
        ev=ev||event;
        this.focus(); //当输入框获得焦点时，改变它的背景色：
        ev.stopPropagation();
    })
    wrap.addEventListener("touchstart",function(ev){
        input.blur(); 
        //blur() 方法用于从单选按钮上移开焦点。
    })
})()