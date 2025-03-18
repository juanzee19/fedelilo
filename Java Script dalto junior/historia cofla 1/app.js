/*  dinero de los chicos
let roberto = 1.5;
let pedro = 1.7;
let cofla = 3;
let dineroTotal = roberto + pedro + cofla; 
*/
//precio de los helados 
let palitoDeHeladoDeAgua = 0.6;
let palitoDeHeladoDeCrema = 1;
let bombonHeladoMarcaHeladix = 1.6;
let bombonHeladoMarcaHeladovich = 1.7;
let bombonHeladoMarcaHelardo = 1.8;
let potecitoDeHeladoConConfites = 2.9;
let poteDeUnCuartoKG = 2.9;

let dineroRoberto = prompt("cuanto dinero tienes Roberto ?");
let dineroPedro = prompt("cuanto dinero tienes Pedro?");
let dineroCofla = prompt("cuanto dinero tienes Cofla ?");
dineroCofla = parseInt(dineroCofla);
/*BLOQUE ROBERTO*/

if (dineroRoberto >= palitoDeHeladoDeAgua  && dineroRoberto < 1){
    alert("comprate el helado de agua Roberto");
}

else if (dineroRoberto >= palitoDeHeladoDeCrema  && dineroRoberto < 1.6){
    alert("comprate el helado de crema Roberto");
}

else if (dineroRoberto >= bombonHeladoMarcaHeladix  && dineroRoberto < 1.7){
    alert("comprate el helado marca Heladix Roberto");
}

else if (dineroRoberto >= bombonHeladoMarcaHeladovich && dineroRoberto < 1.8){
    alert("comprate el helado marca Heladardovich Roberto");
}

else if (dineroRoberto >= bombonHeladoMarcaHelardo && dineroRoberto < 2.9){
    alert("comprate el helado marca Heladardo Roberto");
}

else if (dineroRoberto >= potecitoDeHeladoConConfites ){
    alert("comprate el pote de helado o el pote de 1 kgs Roberto");
}


/*BLOQUE PEDRO */
if (dineroPedro >= palitoDeHeladoDeAgua  && dineroPedro < 1){
    alert("comprate el helado de agua Pedro");
   
}

else if (dineroPedro >= palitoDeHeladoDeCrema  && dineroPedro < 1.6){
    alert("comprate el helado de crema Pedro");
}

else if (dineroPedro >= bombonHeladoMarcaHeladix  && dineroPedro < 1.7){
    alert("comprate el helado marca Heladix Pedro");
}

else if (dineroPedro >= bombonHeladoMarcaHeladovich && dineroPedro < 1.8){
    alert("comprate el helado marca Heladardovich Pedro");
}

else if (dineroPedro >= bombonHeladoMarcaHelardo && dineroPedro < 2.9){
    alert("comprate el helado marca Heladardo Pedro");
}

else if (dineroPedro >= potecitoDeHeladoConConfites ){
    alert("comprate el pote de helado o el pote de 1 kgs Pedro");
}
/* BLOQUE COFLA*/

if (dineroCofla >= palitoDeHeladoDeAgua  && dineroCofla < 1){
    alert("comprate el helado de agua Cofla");
    alert("y te sobran " + dineroCofla - 1);
}

else if (dineroCofla >= palitoDeHeladoDeCrema  && dineroCofla < 1.6){
    alert("comprate el helado de crema Cofla");
    alert("y te sobran " + dineroCofla - 1.6);
}

else if (dineroCofla >= bombonHeladoMarcaHeladix  && dineroCofla < 1.7){
    alert("comprate el helado marca Heladix Cofla");
    alert("y te sobran " + dineroCofla - 1.7);
}

else if (dineroCofla >= bombonHeladoMarcaHeladovich && dineroCofla < 1.8){
    alert("comprate el helado marca Heladardovich Cofla");
    alert("y te sobran " + dineroCofla - 1.8);
}

else if (dineroCofla >= bombonHeladoMarcaHelardo && dineroCofla < 2.9){
    alert("comprate el helado marca Heladardo Cofla");
   
}

else if (dineroCofla >= potecitoDeHeladoConConfites ){
    alert("comprate el pote de helado o el pote de 1 kgs Cofla")
    alert("y te sobran " + (dineroCofla - 2.9));
}








