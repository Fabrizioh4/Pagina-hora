    let d = new Date();
    let mostrarFecha = document.getElementById("fecha");  
    let mostrarHora= document.getElementById("hora");


    let days= ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabadas'];
    let months= ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

    mostrarFecha.innerHTML = `${days[d.getDay()]} ${d.getDate()} De ${months[d.getMonth()]} Del ${d.getFullYear()} `;
    
    mostrarHora.innerHTML = d.getHours() + ':'+d.getMinutes()+ ':'+d.getSeconds() ;

    setInterval(() =>{
        let hora = new Date();
        mostrarHora.innerHTML = hora.toLocaleTimeString();
    },1000)

    setInterval(() =>{
        let dias = new Date();
        mostrarFecha.innerHTML = `${days[dias.getDay()]} ${dias.getDate()} De ${months[dias.getMonth()]} Del ${dias.getFullYear()} `;
    })


    function alerta() {
        swal({
            title: "Gracias por ver la pagina!",
            text: "Te deseo Suerte",
            icon: "success",
            button: "Me Gusta la pagina",
          });
    }


