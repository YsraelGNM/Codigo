window.onload = function () {
    var mboton = document.getElementById("btn");
    var mobjetivo = document.getElementById("objetivo");
    var minput = document.getElementById("miInput");
    var mobjetivo2 = document.getElementById("objetivo2");
    var mselect = document.getElementById("miSelect");
    var mbody = document.querySelector("body");
    var Flag = false;
    var mlapiz = document.querySelector("#lapiz");


    mbody.addEventListener("mousemove",function (event) {
        mlapiz.style.left = event.clientX;
        mlapiz.style.top = event.clientY-100;
        if(Flag){
            var cua = document.createElement("div")
            var tamanio = 4;
            cua.style.width = tamanio;
            cua.style.height = tamanio;
            cua.style.borderRadius = "50%"
            cua.style.backgroundColor = getRandomColor();
            cua.style.top = event.offsetY;
            cua.style.left = event.offsetX;
            cua.style.position = "absolute";
            mbody.appendChild(cua);
        }
    })

    mbody.addEventListener("mousedown",function () {
        Flag = true;
    })

    mbody.addEventListener("mouseup",function () {
        Flag = false;
    })

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

    mobjetivo.addEventListener("mouseover",function () {
        this.style.backgroundColor = "peru";
    });
    
    mobjetivo.addEventListener("mouseout",function () {
        this.style.backgroundColor = "violet";
    });

    minput.addEventListener("focus",function () {
        this.style.borderBottomColor = "tomato";
        this.style.outline = "none";
    });

    minput.addEventListener("blur",function () {
        this.style.borderBottomColor = "white";
    });

    minput.addEventListener("keydown",function (event) {
        console.log(`la tecla abajo es ${event.keyCode}`);
        console.log(`la tecla abajo es ${event.key}`);
    });

    minput.addEventListener("keypress",function () { //el press es el verdadero
        console.log(`la tecla keypress es ${event.keyCode}`);
        console.log(`la tecla keypress es ${event.key}`);
    });

    minput.addEventListener("keyup",function () {
        console.log(`la tecla arriba es ${event.keyCode}`);
        console.log(`la tecla arriba es ${event.key}`);
    });

    mobjetivo2.addEventListener("dblclick",function () {
        this.style.userSelect = "none";
        if(this.style.borderRadius == "0%"){
            this.style.borderRadius = "50%";
        }else{
            this.style.borderRadius = "0%";
        }
        
    });

    mselect.addEventListener("change",function(event) {
        console.log(event);
        minput.value = this.options[this.selectedIndex].innerHTML;
    });




};