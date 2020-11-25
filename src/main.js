export default class App {
 
    esPar(numero){
        if (numero % 2 == 0){
            return true;
        } else {return false}
    }


}

let app = new App();

console.log(app.esPar(4));
console.log(app.esPar(5));
