let nombre = " "
let edad = ""
const tiempoDeEspera = 15+" min"
const tiempoDeEspera2 = 10+" min"
let limiteTurnos = 10

// while (!="ESC")
for  (let i = 1; i<=10; i++) {
    let nombre = prompt("Ingresar nombre del correspondiente al turno. Recuerda que hay un limite de 10 turnos")
    let edad = prompt("Ingrese la edad de la persona a la que corresponda el turno")
 {
    if (edad >=18 ){
        alert("Turno n° " + i + " " + nombre + " Tu turno tendra una espera de " + tiempoDeEspera )
    }
   if (edad <18 ) {
    alert("Turno n° " + i + " " + nombre + " Tu turno tendra una espera de " + tiempoDeEspera2 )
   }
   if (i==10) {
    alert("No hay mas turnos disponibles para el dia de hoy, regresar mañana")
    break;
   }
}



}