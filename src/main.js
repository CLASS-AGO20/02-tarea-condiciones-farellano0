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

    obtenerCercano100(numero1, numero2, numero3){
        let x = Math.abs(numero1 - 100);
        let y = Math.abs(numero2 - 100);
        let z = Math.abs(numero3 - 100);

        if(x < y && x < z){
            return numero1;
        } else if (y < x && y < z){
            return numero2;
        } else if (z < x && z < y){
            return numero3;
        } else {
            return numero1;
        }

    }

    calcular(numero1, numero2, operador){
        switch(operador){
            case '+':
                return numero1 + numero2;
            case '-':
                return numero1 - numero2;
            case '*':
                return numero1 * numero2;
            case '/':
                return numero1 / numero2;
            case '%':
                return numero1 % numero2;
            default:
                return -1;
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

console.log("Probando obtenerCalificacion()");
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

console.log("Probando obtenerCercano100()");
console.log(app.obtenerCercano100(98, 50, 105));
console.log(app.obtenerCercano100(90, 70, 103));
console.log(app.obtenerCercano100(98, 98, 98));

console.log("Probando calcular()");
console.log(app.calcular(7,8,'+'));
console.log(app.calcular(7,8,'-'));
console.log(app.calcular(7,8,'*'));
console.log(app.calcular(7,8,'/'));
console.log(app.calcular(7,8,'%'));