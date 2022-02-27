const input = document.querySelector(".tarea");
const boton = document.querySelector(".agregar");
const tareas = document.querySelector(".tareas");
const vaciar = document.querySelector(".vaciar");
// max 13 caracteres <<<<<<



boton.addEventListener("click", (e)=>{
    e.preventDefault();
    
    // Si el input tiene 13 o menos caracteres Y si hay hasta 9 elementos:
    if(input.value.length <= 13 && tareas.childElementCount <= 8){
        const id = tareas.childElementCount +1;
        const iconos = `<div class="iconos" id="iconos-${id}"><i class="fa-solid fa-pencil" id="modificar-${id}"></i><i class="fa-solid fa-trash" id="eliminar-${id}"></i></div>`
    let tarea = document.createElement("p");
    tarea.id = id
    tarea.innerHTML = `<p id="${id}">${tareas.childElementCount +1}. ${input.value}</p> ${iconos}`

    tareas.appendChild(tarea)
}
})

vaciar.addEventListener("click", (e)=>{
    e.preventDefault();
    if(tareas.childElementCount == 0){
        alert("no puedes vaciar la lista, por que esta vacia")
    }
    else {
        confirm("¿seguro que deseas vaciar tu lista?")
        if(confirm){ 
            do {
                for(let tarea of tareas.children){
                    tarea.innerHTML = ""
                    tarea.remove()
                } 
            } while(document.querySelector('.tareas').childElementCount != 0); 
            //LISTOOO KDMLFASDKMADS

        } 
    }
})

//Eliminar elemento

tareas.addEventListener('click',(e) => {
    if(e.target.id.toString().includes('eliminar')){
        const id_ = e.target.id.toString().split('eliminar-')[1]; 
        e.target.parentNode.parentNode.innerHTML = ""; 
        document.getElementById(`${id_}`).remove() //:D
    }
})

//Editar elemento

tareas.addEventListener('click',(e) => {
    if(e.target.id.toString().includes('modificar')){
        const id_ = e.target.id.toString().split('modificar-')[1]; 
        const nuevoValor = prompt('nuevo valor: ');
        e.target.parentNode.parentNode.innerHTML = `<p id="${id_}">${id_}. ${nuevoValor}</p> <div class="iconos" id="iconos-${id_}"><i class="fa-solid fa-pencil" id="modificar-${id_}"></i><i class="fa-solid fa-trash" id="eliminar-${id_}"></i></div>`
    }
    // 
})

