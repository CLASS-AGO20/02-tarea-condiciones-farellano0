export default class App {
 
    esPar(numero){
        if (numero == 0){
            return false;
        } else if (numero % 2 == 0){
            return true;
        } else {
            return false;
        }
    }

    esMultiplo(numero1, numero2){
        if (numero1 % numero2 == 0){
            return true;
        } else {
            return false;
        }
    }

    calcularSalario(tipoTrabajador, horasTrabajadas){
        switch(tipoTrabajador){
            case 1:
                return horasTrabajadas * 20;
            case 2:
                return horasTrabajadas * 22;
            case 3:
                return horasTrabajadas * 25;
            default:
                return -1;
        }
    }

    obtenerCalificacion(calificacionNumerica){
        
        switch(calificacionNumerica){
            case 0:
                return "C";
            case 1:
                return "C";
            case 2:
                return "C";
            case 3:
                return "C";
            case 4:
                return "C";
            case 5:
                return "C";
            case 6:
                return "B";
            case 7:
                return "B";
            case 8:
                return "A";
            case 9:
                return "A";
            case 10:
                return "A+";
            default:
                return "ERROR"
        }

    }




}

let app = new App();

console.log("Probando esPar()");
console.log(app.esPar(4));
console.log(app.esPar(5));
console.log(app.esPar(0));

console.log("Probando esMultiplo()");
console.log(app.esMultiplo(10, 5));
console.log(app.esMultiplo(9, 4));

console.log("Probando calcularSalario()");
console.log(app.calcularSalario(1, 8));
console.log(app.calcularSalario(2, 8));
console.log(app.calcularSalario(3, 8));
console.log(app.calcularSalario(4, 8));

console.log("Probando obtenerCalificacion()")
console.log(app.obtenerCalificacion(0));
console.log(app.obtenerCalificacion(1));
console.log(app.obtenerCalificacion(2));
console.log(app.obtenerCalificacion(3));
console.log(app.obtenerCalificacion(4));
console.log(app.obtenerCalificacion(5));
console.log(app.obtenerCalificacion(6));
console.log(app.obtenerCalificacion(7));
console.log(app.obtenerCalificacion(8));
console.log(app.obtenerCalificacion(9));
console.log(app.obtenerCalificacion(10));
console.log(app.obtenerCalificacion(11));