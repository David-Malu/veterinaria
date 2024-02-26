datos = [];
let id = null
let bd = false

function traerDatos() {
    datos.forEach(dato => {
        document.getElementById("datos").innerHTML += `
        <div class="card mt-2" style="width: 35rem">
        <div class="card-body">
          <div class="row">
            <div class="col-sm-4">
            <b>
            
            <span style="display: flex;
    justify-content: center;
    align-items: center;color: red;" >${dato.nombre}</span></b>
              <img
                style="width: 170px; height: 150px"
                id="asi"
                class="card-img-top"
                src="${dato.raza}.jpg"
                alt=""
              />
              <div class="row">
                <div class="col-sm-12 mt-1" >
                  <input class="btn btn-warning fst-italic"  onclick=editar(${JSON.stringify(dato).toString()}) type="button" value="Editar" >
                  <input class="btn fst-italic " style="background-color: rgb(17, 116, 17); ; color:#fff;" onclick=eliminar(${dato.id}) type="button" value="Eliminar">
                </div>
              </div>
            </div>
            <div class="col-sm-4" >
              <b>Propietario:</b> ${dato.propietario}<br /> <br /> <b>raza:</b> ${dato.raza}<br /><br />
              <b>Telefono:</b> ${dato.telefono}<br />
            </div>
            <div class="col-sm-4" >
              <b>Fecha:</b> ${dato.fecha}<br /><br />
              <b>Hora:</b> ${dato.hora}<br /><br />
              <b>Sintomas: </b>${dato.sintomas} <br /><br />
            </div>
          </div>
        </div>
      </div>
        `
    });
}

function editar(p) {
    bd = true
    id = p.id
    console.log(p);
    document.getElementById("nombre").value = p.nombre
    document.getElementById("propietario").value = p.propietario
    document.getElementById("raza").value = p.raza
    document.getElementById("telefono").value = p.telefono
    document.getElementById("fecha").value = p.fecha
    document.getElementById("hora").value = p.hora
    document.getElementById("sintomas").value = p.sintomas


}

function edicion() {

    if (bd === true && document.getElementById("nombre").value != "" && document.getElementById("propietario").value != "" && document.getElementById("raza").value != ""
        && document.getElementById("telefono").value != "" && document.getElementById("fecha").value != ""
        && document.getElementById("hora").value != "" && document.getElementById("sintomas").value != "") {
        datos.forEach(dato => {
            if (dato.id == id) {
                dato.nombre = document.getElementById("nombre").value
                dato.propietario = document.getElementById("propietario").value
                dato.raza = document.getElementById("raza").value
                dato.telefono = document.getElementById("telefono").value
                dato.fecha = document.getElementById("fecha").value
                dato.hora = document.getElementById("hora").value
                dato.sintomas = document.getElementById("sintomas").value

            }
        })



        console.log(datos);
        document.getElementById("datos").innerHTML = ""
        traerDatos()
        vaciar()
        bd = false
        id = null


    } else {

        validacion()

    }

}

function agregar() {

    datos.push(
        {
            id: datos.length + 1,
            nombre: document.getElementById("nombre").value,
            propietario: document.getElementById("propietario").value,
            raza: document.getElementById("raza").value,
            telefono: document.getElementById("telefono").value,
            fecha: document.getElementById("fecha").value,
            hora: document.getElementById("hora").value,
            sintomas: document.getElementById("sintomas").value


        }
    )

    console.log(datos);
    document.getElementById("datos").innerHTML = ""
    traerDatos()
    vaciar()

}

function vaciar() {
    document.getElementById("nombre").value = ""
    document.getElementById("propietario").value = ""
    document.getElementById("raza").value = ""
    document.getElementById("telefono").value = ""
    document.getElementById("fecha").value = ""
    document.getElementById("hora").value = ""
    document.getElementById("sintomas").value = ""

}

function eliminar(i) {
    console.log(i);
    let pos = datos.findIndex(e =>
        e.id == i
    )
    console.log(pos);

    datos.splice(pos, 1)
    document.getElementById("datos").innerHTML = ""
    traerDatos()
}

function validacion() {

    if (nombre.value === "") {
        document.getElementById("alertError").setAttribute("style", "display:block")
        document.getElementById("textError").innerHTML = `Llena la casilla nombre`
        setTimeout(() => {
            document.getElementById("alertError").setAttribute("style", "display:none")
        }, 2000);

    } else if (propietario.value === "") {
        document.getElementById("alertError").setAttribute("style", "display:block")
        document.getElementById("textError").innerHTML = `Llena la casilla propietario`
        setTimeout(() => {
            document.getElementById("alertError").setAttribute("style", "display:none")
        }, 2000);
    } else if (raza.value === "") {
        document.getElementById("alertError").setAttribute("style", "display:block")
        document.getElementById("textError").innerHTML = `Llena la casilla raza`
        setTimeout(() => {
            document.getElementById("alertError").setAttribute("style", "display:none")
        }, 2000);
    } else if (telefono.value === "") {
        document.getElementById("alertError").setAttribute("style", "display:block")
        document.getElementById("textError").innerHTML = `Llena la casilla telefono`
        setTimeout(() => {
            document.getElementById("alertError").setAttribute("style", "display:none")
        }, 2000);
    } else if (fecha.value === "") {
        document.getElementById("alertError").setAttribute("style", "display:block")
        document.getElementById("textError").innerHTML = `Llena la casilla fecha`
        setTimeout(() => {
            document.getElementById("alertError").setAttribute("style", "display:none")
        }, 2000);

    } else if (hora.value === "") {
        document.getElementById("alertError").setAttribute("style", "display:block")
        document.getElementById("textError").innerHTML = `Llena la casilla hora`
        setTimeout(() => {
            document.getElementById("alertError").setAttribute("style", "display:none")
        }, 2000);
    } else if (sintomas.value === "") {
        document.getElementById("alertError").setAttribute("style", "display:block")
        document.getElementById("textError").innerHTML = `Llena la casilla sintomas`
        setTimeout(() => {
            document.getElementById("alertError").setAttribute("style", "display:none")
        }, 2000);
    } else {
        agregar()
        document.getElementById("alertOk").setAttribute("style", "display:block")
        setTimeout(() => {
            document.getElementById("alertOk").setAttribute("style", "display:none")
        }, 2000);
    }



    // if (nombre.value === "" || propietario.value === "" || raza.value === "" || telefono.value === "" || fecha.value === "" || hora.value === "" || sintomas.value === "") {


    //     document.getElementById("alertError").setAttribute("style", "display:block")

    //     setTimeout(() => {
    //         document.getElementById("alertError").setAttribute("style", "display:none")
    //     }, 2000);


    // } else {
    //     agregar()
    //     document.getElementById("alertOk").setAttribute("style", "display:block")
    //     setTimeout(() => {
    //         document.getElementById("alertOk").setAttribute("style", "display:none")
    //     }, 2000);
    // }



}



