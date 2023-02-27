function responsiveMenu(){
    var x = document.getElementById("nav");
    if (x.className===""){
        x.className = "responsive";
    } else{
        x.className = "";
    }
}

function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    link.className = "seleccionado";
    
    var x = document.getElementById("nav");
x.className = "";
}

window.onscroll = function(){
    efectoHabilidades()
};

function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_habilidades = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_habilidades >=300){
        document.getElementById('html').classList.add("barra-progreso1");
        document.getElementById('html').classList.add("barra-progreso2");
    }
}
