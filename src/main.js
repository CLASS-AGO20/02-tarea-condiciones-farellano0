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



}

let app = new App();

console.log("Probando esPar()");
console.log(app.esPar(4));
console.log(app.esPar(5));
console.log(app.esPar(0));

console.log("Probando esMultiplo()");
console.log(app.esMultiplo(10, 5));
console.log(app.esMultiplo(9, 4));