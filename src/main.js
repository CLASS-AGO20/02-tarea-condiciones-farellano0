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
    costoRenta(peliculas, dia){
        switch(dia){
            case 1:
                let x = peliculas - (peliculas % 3);
                let x1 = peliculas - x;
                if(peliculas % 3 == 0){
                return 60 * (x / 3);
            } else if (peliculas % 3 != 0 && peliculas > 3){
                return 60 * (x / 3) + (x1 * 25);
            } else {
                return peliculas * 25;
            }
            case 2:
                let y = Math.round(peliculas / 2);
                let y1 = Math.round(peliculas / 2) - 1;
                if(peliculas % 2 == 0){
                    return y * 25;
                } else if (peliculas % 2 != 0 && peliculas > 2){
                    return y1 * 25 + (peliculas % 2 * 25);  
                } else {
                    return peliculas * 25;
                }
            case 3:
                let pdescuento = 25 - (25 * 0.15);
                return peliculas * pdescuento;
            case 4:
                let z = Math.round(peliculas / 2);
                let z1 = Math.round(peliculas / 2) - 1;
                if(peliculas % 2 == 0){
                    return z * 25;
                } else if (peliculas % 2 != 0 && peliculas > 2){
                    return z1 * 25 + (peliculas % 2 * 25);  
                } else {
                    return peliculas * 25;
                }
            case 5:
                let a = peliculas - (peliculas % 3);
                let a1 = peliculas - a;
                if(peliculas % 3 == 0){
                return 60 * (a / 3);
            } else if (peliculas % 3 != 0 && peliculas > 3){
                return 60 * (a / 3) + (a1 * 25);
            } else {
                return peliculas * 25;
            }
            case 6:
                return peliculas * 25;
            case 7:
                return peliculas * 25;
            default:
                return -1;
        }
    }
    costoBoletos(boletos, zona){
        switch(zona){
            case 1:
                let costototal = boletos * 300;
                if(costototal < 2000){
                    return costototal;
                } else {
                    return costototal - (costototal * 0.07);
                }
            case 2:
                let costototal2 = boletos * 450;
                if(costototal2 < 2000){
                    return costototal2;
                } else {
                    return costototal2 - (costototal2 * 0.07);
                }
            case 3:
                let costototal3 = boletos * 700;
                if(costototal3 < 2000){
                    return costototal3;
                } else {
                    return costototal3 - (costototal3 * 0.07);
                }
            default:
                return -1;
        }
    }
    estaEnRango(limiteInicial, limiteFinal, numero){
        if(numero > limiteInicial && numero < limiteFinal){
            return true;
        } else {
            return false;
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

console.log("Probando costoRenta()");
console.log(app.costoRenta(365, 1));
console.log(app.costoRenta(386, 2));
console.log(app.costoRenta(7, 3));
console.log(app.costoRenta(386, 4));
console.log(app.costoRenta(7, 5));
console.log(app.costoRenta(7, 6));
console.log(app.costoRenta(7, 7));
console.log(app.costoRenta(7, 8));

console.log("costoBoletos()");
console.log(app.costoBoletos(7, 1));
console.log(app.costoBoletos(7, 2));
console.log(app.costoBoletos(7, 3));
console.log(app.costoBoletos(7, 4));

console.log("estaEnRango()");
console.log(app.estaEnRango(10, 20, 15));
console.log(app.estaEnRango(10, 20, 7));
