window.onload = function () {
    var btnCrear = document.querySelector("#btnCrear");
    var inputNombre = document.querySelector("#inputNombre");
    var inpuTrabajo = document.querySelector("#inputTrabajo");
    var mAlert = document.querySelector("#miAlert");
    var mMensaje = document.querySelector("#mensaje");
    btnCrear.onclick = function(){
        let data = {
            name:inputNombre.value,
            job:inpuTrabajo.value 
        }
        let xhr = new XMLHttpRequest();
        xhr.timeout = 2000;
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4){
                //console.log(xhr.responseText);
                let responseJson = JSON.parse(xhr.responseText);
                if(responseJson.job){
                    //exito
                    mMensaje.innerHTML = "";
                    mMensaje.innerHTML = `El Usuario <strong> ${responseJson.name} </strong> ha sido creado.`; 
                    mAlert.removeAttribute("hidden");
                    if(!mAlert.classList.contains("alert-primary")){
                        mAlert.classList.add("alert-primary");
                        mAlert.classList.remove("alert-danger");
                    }
                }else{
                    //error
                    mMensaje.innerHTML = "";
                    mMensaje.innerHTML = `<strong> Ups! </strong> Ocurrió un error.`; 
                    mAlert.removeAttribute("hidden");
                    if(mAlert.classList.contains("alert-primary")){
                        mAlert.classList.remove("alert-primary");
                        mAlert.classList.add("alert-danger");
                    }
                }
            }
        };

        //ontimeout => es la funcion que se ejecuta al momento de expirar el tiempo programado.
        xhr.ontimeout = function () {
            console.error("Error, se agotó el tiempo de espera.");
        }

        xhr.open("POST","https://reqres.in/api/users");
        xhr.setRequestHeader("Content-Type","application/json"); //esta linea siempre despues del open.
        xhr.send(JSON.stringify(data));
  
        
    }





}