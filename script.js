// 1.- Por un lado habrás de crear una variable cargador donde habrá de guardar unos 7 "pium!"

let cargador = ['pium!','pium!','pium!','pium!','pium!','pium!','pium!'];


// 2.- El otro elemento será nuestra chauchat, que "hace cosas", y será donde pondremos el cargador para que haga cosas. Cuando ejecutemos dicho código, veremos impresos todos los "pium!" del cargador, uno tras otro.
/*
function dispararChauchat (cargador) {
    for (i = 0; i < cargador.length; i++) {
        console.log(cargador[i]);
    };
};
*/


// 3.- Al tener el cargador abierto, era posible que se bloquease si algo entraba, como una "ramita". Digamos que existe un 80% de probabilidad de que se quede "pillada": Si se queda pillada, no habrá tiros y sólo mostrará un mensaje: "Illo, me he quedao pillá!"

/*
function dispararChauchat (cargador) {
    percent = Math.floor(Math.random() * 101);
    if (percent <= 20) {
        for (i = 0; i < cargador.length; i++) {
            console.log(cargador[i]);
        };
    }else{
        console.log("Illo, me he quedao pillá!");
    };
};
*/



// 4.- Para evitar que se caliente y se bloquee, cada 3 disparos se imprimirá un espacio:

/*
function chauchat(cargador) {
    if (Math.floor(Math.random() * 10) <= 2) {
        for (i = 1; i < cargador; i++) {
            if (i % 4 == 0) {
                console.log(" ");
            }else{
                console.log("pium!");
            }
        }
    }else{
        console.log("Illo, me he quedao pillá!");
    }
}
chauchat(31);
*/