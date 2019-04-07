// Querida Lou, te dejo mis observaciones a tu trabajo. 
// En general tu codigo esta bien, tus soluciones son creativas y claras y se nota el empeño que pusiste
// La unica observacion seria a hacerte es que varias veces te olvidaste de declarar la "i" en un for
// Eso es un error que puede arruinar tu codigo
// (Y de hecho, tu funcion ventasPorSucursal no funciono de la manera que esperabas justamente porque te olvidaste
//  de declarar la i). 
// Este es un error a corregir lo antes posible, y te animo a que practiques tus for
//  El resto de las observacione son meros detalles, que te fui salpicando a lo largo del trabajo
// En general, insisto, hiciste un gran trabajo y podes sentirte orgullosa de vos misma

/*Local de ventas de PCs
Una empresa de venta de computadoras está desarrollando un sistema para llevar registro de ventas. Para ello cuenta con la siguiente información:

Lista de las vendedoras de la empresa
Lista de ventas. Un array con objetos. Cada objeto representa una venta y tiene las propiedades fecha, nombreVendedora (un String con el nombre), 
componentes (un array Strings con el nombre de cada componente vendido).
Lista de precios de los componentes, de la forma (nombre componente, precio).
*/

var local = {
  vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],

  ventas: [
    { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
    { fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
    { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"] },
    { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"] },
    { fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"] }
  ],

  precios: [
    { componente: "Monitor GPRS 3000", precio: 200 },
    { componente: "Motherboard ASUS 1500", precio: 120 },
    { componente: "Monitor ASC 543", precio: 250 },
    { componente: "Motherboard ASUS 1200", precio: 100 },
    { componente: "Motherboard MZI", precio: 30 },
    { componente: "HDD Toyiva", precio: 90 },
    { componente: "HDD Wezter Dishital", precio: 75 },
    { componente: "RAM Quinston", precio: 110 },
    { componente: "RAM Quinston Fury", precio: 230 }
  ]
};

/*Se pide desarrollar las siguientes funciones:

precioMaquina(componentes): recibe un array de componentes y devuelve el precio de la máquina que se puede armar con esos componentes, que es la suma 
de los precios de cada componente incluido.
*/


function precioMaquina(parametros) { // preferimos nombres mas descriptivos para los parametros, al igual
  // que para las variables. La idea es que describan que tipo de dato tienen dentro, para que otra persona
  // que lee nuestro codigo sepa rapidamente que son. En este caso, por ejemplo, "componentes" seria una mejor opcion. 
  var precioTotal = 0;
  for (var i = 0; i < parametros.length; i++) {
    //console.log(parametros[i])

    // esto es un detalle, Lou, pero si fuera un challenge para una entrevista, por ejemplo, 
    // no quedaria bien dejar los console.log en el codigo, incluso cuando estan comentados
    // los console.log son muy utiles mientras estamos desarrollando, pero nunca deben dejarse
    // en el trabajo final a entregar. 
    
    for (var j = 0; j < local.precios.length; j++) {
      //console.log(local.precios[j].componente)
      //console.log(local.precios[j].precio)

      if (parametros[i] === local.precios[j].componente) {
        precioTotal += local.precios[j].precio;
      }
    }
  }
  return precioTotal;
}

console.log(precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"])); // 320 ($200 del monitor + $120 del motherboard)



//cantidadVentasComponente(componente)
// recibe un componente y devuelve la cantidad de veces que fue vendido, o sea que formó parte de una máquina que se vendió. 
//La lista de ventas no se pasa por parámetro, se asume que está identificada por la variable ventas.



function cantidadVentasComponente(componente) {
  var ventasTotales = 0;
  for (var i = 0; i < local.ventas.length; i++) {
    //console.log(local.ventas[i].componentes)
    for (var j = 0; j < local.ventas[i].componentes.length; j++) {
      //console.log(local.ventas[i].componentes[j])
      if (local.ventas[i].componentes[j] === componente) {
        ventasTotales += 1;
      }
    }
  } return ventasTotales;
}

console.log(cantidadVentasComponente("Monitor ASC 543")); // 2

/*vendedoraDelMes(mes, anio), se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la vendedora que más vendió en plata en el mes.
O sea no cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función precioMaquina.
 */


function vendedoraDelMes(mes, anio) {
  var ventasAda = 0;
  var ventasGrace = 0;
  for (var i = 0; i < local.ventas.length; i++) {
    if (local.ventas[i].fecha.getMonth() + 1 == mes && local.ventas[i].fecha.getFullYear() == anio) {
      //console.log('el valor de la venta fue de:')
      //console.log(precioMaquina(local.ventas[i].componentes))
      //console.log('y la vendedora fue', local.ventas[i].nombreVendedora)
      if (local.ventas[i].nombreVendedora == 'Ada') {
        ventasAda += precioMaquina(local.ventas[i].componentes);
      } else if (local.ventas[i].nombreVendedora == 'Grace') {
        ventasGrace += precioMaquina(local.ventas[i].componentes);
      }
    }
  }
  //console.log('el total de Ada fue' + ventasAda + 'y el total de ventas Grace fue' + ventasGrace);
  if (ventasAda > ventasGrace) {
    return 'Ada'
  } else if (ventasGrace > ventasAda) {
    return 'Grace'
  } else {
    return 'Premio compartido entre Grace y Ada'
  }
}


// Una manera de hacerlo sin "hardcodear" los nombres de Ada y Grace seria la siguiente:
// function vendedoraDelMes(mes, anio) {
//     var arrayVendedoras = [];
//     for (var i = 0; i < local.vendedoras.length; i++) {
//         var vendorasObj = {
//             nombre: local.vendedoras[i],
//             ventas: 0,
//         }
//         for (var j = 0; j < local.ventas.length; j++) {
//             if (local.ventas[j].fecha.getMonth() + 1 == mes && local.ventas[i].fecha.getFullYear() == anio) {
//                 var precioComponentes = precioMaquina(local.ventas[j].componentes)
//                 if (local.vendedoras[i] === local.ventas[j].nombreVendedora) {
//                     if (vendorasObj.nombre === local.ventas[j].nombreVendedora) {
//                         vendorasObj.ventas = vendorasObj.ventas + precioComponentes;
//                     }
//                 }
//             }
//         }
//         arrayVendedoras.push(vendorasObj)
//     }

//     var mejorVendedora;
//     var ventaMax = 0;

//     for (var k = 0; k < arrayVendedoras.length; k++) {
//         if (arrayVendedoras[k].ventas) {
//             ventaMax = arrayVendedoras[k].ventas;
//             mejorVendedora = arrayVendedoras[k].nombre;
//             return 'La vendedora del mes es' + ' ' + mejorVendedora + ' ' + 'con' + ' ' + ventaMax + ' ' + 'pesos vendidos'
//         }
//     }
// }

console.log(vendedoraDelMes(1, 2019)); // "Ada" (vendio por $670, una máquina de $320 y otra de $350)


//ventasMes(mes, anio): Obtener las ventas de un mes.



function ventasMes(mes, anio) {
  ventasDelMes = 0;
  for (var i = 0; i < local.ventas.length; i++) {
    if (local.ventas[i].fecha.getMonth() + 1 == mes && local.ventas[i].fecha.getFullYear() == anio) {
      ventasDelMes += precioMaquina(local.ventas[i].componentes);
    }
  } return ventasDelMes;
}
console.log(ventasMes(1, 2019));


//ventasVendedora(nombre): Obtener las ventas totales realizadas por una vendedora sin límite de fecha.

function ventasVendedora(nombre) {
  var totalPorVendedora = 0;
  for (var i = 0; i < local.ventas.length; i++) {
    if (local.ventas[i].nombreVendedora == nombre) {
      totalPorVendedora += precioMaquina(local.ventas[i].componentes)
    }
  } return totalPorVendedora;
}
console.log(ventasVendedora("Grace")); // 900


//componenteMasVendido(): Devuelve el nombre del componente que más ventas tuvo historicamente. 
//El dato de la cantidad de ventas es el que indica la función cantidadVentasComponente


function componenteMasVendido() {
  var cantidades = [];
  var valorMaximo = 0;
  var posicionDelValorMaximo = 0;
  for (var i = 0; i < local.precios.length; i++) {
    cantidades.push(cantidadVentasComponente(local.precios[i].componente));
    for (var j = 0; j < cantidades.length; j++) {
      if (cantidades[j] > valorMaximo) {
        valorMaximo = cantidades[j];
        posicionDelValorMaximo = j;
        //console.log(posicionDelValorMaximo)
      }
    }
  } return local.precios[posicionDelValorMaximo].componente;
}

console.log(componenteMasVendido()); // Monitor GPRS 3000


//huboVentas(mes, anio): que indica si hubo ventas en un mes determinado.


function huboVentas(mes, anio) {
  var seVendio;
  for (var i = 0; i < local.ventas.length; i++) {
    if (local.ventas[i].fecha.getMonth() + 1 == mes && local.ventas[i].fecha.getFullYear() == anio) {
      seVendio = true;
      break;
    } else {
      seVendio = false;
    }
  } return seVendio;
}

console.log(huboVentas(3, 2019)); // false

// Una version mas breve aun:
// function huboVentas (mes, anio) {
//   return ventasMes(mes, anio) > 0;
// }


/*Como se abrió una nueva sucursal en Caballito, ahora los datos de las ventas también tienen el nombre de la sucursal en la cual se realizó. Por ejemplo:
{ fecha: new Date(2019, 1, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: 'Centro' }.
 Por este cambio, se pide: En las ventas ya existentes, tenemos que agregar la propiedad sucursal con el valor Centro (ya que es la sucursal original).
 */

for (i = 0; i < local.ventas.length; i++) {
  local.ventas[i].sucursal = 'Centro';
  
  // ojo Lou, aca no pusiste "var" antes de declarar la i del for
  // Eso puede traer problemas con el valor de i
  
}
//console.log(local.ventas)

//Agregar al objeto principal la propiedad sucursales: ['Centro', 'Caballito']

local.sucursales = ['Centro', 'Caballito'];

//console.log(local)

//Cargar la siguiente información en el array ventas, creando sus respectivos objetos siguiendo el patrón: fecha, nombreVendedora, componentes, sucursal

// 12/02/2019, Hedy, [Monitor GPRS 3000, HDD Toyiva], Centro
// 24/02/2019, Sheryl, [Motherboard ASUS 1500, HDD Wezter Dishital], Caballito
// 01/02/2019, Ada, [Motherboard MZI, RAM Quinston Fury], Centro
// 11/02/2019, Grace, [Monitor ASC 543, RAM Quinston], Caballito
// 15/02/2019, Ada, [Motherboard ASUS 1200, RAM Quinston Fury], Centro
// 12/02/2019, Hedy, [Motherboard ASUS 1500, HDD Toyiva], Caballito
// 21/02/2019, Grace, [Motherboard MZI, RAM Quinston], Centro
// 08/02/2019, Sheryl, [Monitor ASC 543, HDD Wezter Dishital], Centro
// 16/02/2019, Sheryl, [Monitor GPRS 3000, RAM Quinston Fury], Centro
// 27/02/2019, Hedy, [Motherboard ASUS 1200, HDD Toyiva], Caballito
// 22/02/2019, Grace, [Monitor ASC 543, HDD Wezter Dishital], Centro
// 05/02/2019, Ada, [Motherboard ASUS 1500, RAM Quinston], Centro
// 01/02/2019, Grace, [Motherboard MZI, HDD Wezter Dishital], Centro
// 07/02/2019, Sheryl, [Monitor GPRS 3000, RAM Quinston], Caballito
// 14/02/2019, Ada, [Motherboard ASUS 1200, HDD Toyiva], Centro

//var datosNuevos = ['12/02/2019, Hedy, [Monitor GPRS 3000, HDD Toyiva], Centro 24/02/2019, Sheryl, [Motherboard ASUS 1500, HDD Wezter Dishital], Caballito 01/02/2019, Ada, [Motherboard MZI, RAM Quinston Fury], Centro 11/02/2019, Grace, [Monitor ASC 543, RAM Quinston], Caballito 15/02/2019, Ada, [Motherboard ASUS 1200, RAM Quinston Fury], Centro 12/02/2019, Hedy, [Motherboard ASUS 1500, HDD Toyiva], Caballito 21/02/2019, Grace, [Motherboard MZI, RAM Quinston], Centro 08/02/2019, Sheryl, [Monitor ASC 543, HDD Wezter Dishital], Centro 16/02/2019, Sheryl, [Monitor GPRS 3000, RAM Quinston Fury], Centro 27/02/2019, Hedy, [Motherboard ASUS 1200, HDD Toyiva], Caballito 22/02/2019, Grace, [Monitor ASC 543, HDD Wezter Dishital], Centro 05/02/2019, Ada, [Motherboard ASUS 1500, RAM Quinston], Centro 01/02/2019, Grace, [Motherboard MZI, HDD Wezter Dishital], Centro 07/02/2019, Sheryl, [Monitor GPRS 3000, RAM Quinston], Caballito 14/02/2019, Ada, [Motherboard ASUS 1200, HDD Toyiva], Centro']
//console.log(datosNuevos)

local.ventas.push(
  { fecha: new Date(2019, 1, 12), nombreVendedora: 'Hedy', componentes: ['Monitor GPRS 3000', 'HDD Toyiva'], sucursal: 'Centro' },
  { fecha: new Date(2019, 1, 24), nombreVendedora: 'Sheryl', componentes: ['Motherboard ASUS 1500', 'HDD Wezter Dishital'], sucursal: 'Caballito' },
  { fecha: new Date(2019, 1, 1), nombreVendedora: 'Ada', componentes: ['Motherboard MZI', 'RAM Quinston Fury'], sucursal: 'Centro' },
  { fecha: new Date(2019, 1, 11), nombreVendedora: 'Grace', componentes: ['Monitor ASC 543', 'RAM Quinston'], sucursal: 'Caballito' },
  { fecha: new Date(2019, 1, 15), nombreVendedora: 'Ada', componentes: ['Motherboard ASUS 1200', 'RAM Quinston Fury'], sucursal: 'Centro' },
  { fecha: new Date(2019, 1, 12), nombreVendedora: 'Hedy', componentes: ['Motherboard ASUS 1500', 'HDD Toyiva'], sucursal: 'Caballito' },
  { fecha: new Date(2019, 1, 21), nombreVendedora: 'Grace', componentes: ['Motherboard MZI', 'RAM Quinston'], sucursal: 'Centro' },
  { fecha: new Date(2019, 1, 8), nombreVendedora: 'Sheryl', componentes: ['Monitor ASC 543', 'HDD Wezter Dishital'], sucursal: 'Centro' },
  { fecha: new Date(2019, 1, 16), nombreVendedora: 'Sheryl', componentes: ['Monitor GPRS 3000', 'RAM Quinston Fury'], sucursal: 'Centro' },
  { fecha: new Date(2019, 1, 27), nombreVendedora: 'Hedy', componentes: ['Motherboard ASUS 1200', 'HDD Toyiva'], sucursal: 'Caballito' },
  { fecha: new Date(2019, 1, 22), nombreVendedora: 'Grace', componentes: ['Monitor ASC 543', 'HDD Wezter Dishital'], sucursal: 'Centro' },
  { fecha: new Date(2019, 1, 5), nombreVendedora: 'Ada', componentes: ['Motherboard ASUS 1500', 'RAM Quinston'], sucursal: 'Centro' },
  { fecha: new Date(2019, 1, 1), nombreVendedora: 'Grace', componentes: ['Motherboard MZI', 'HDD Wezter Dishital'], sucursal: 'Centro' },
  { fecha: new Date(2019, 1, 7), nombreVendedora: 'Sheryl', componentes: ['Monitor GPRS 3000', 'RAM Quinston'], sucursal: 'Caballito' },
  { fecha: new Date(2019, 1, 14), nombreVendedora: 'Ada', componentes: ['Motherboard ASUS 1200', 'HDD Toyiva'], sucursal: 'Centro' }
)

//console.log(local.ventas);

//Crear la función ventasSucursal(sucursal), que obtiene las ventas totales realizadas por una sucursal sin límite de fecha.

function ventasSucursal(sucursal) {
  var totalSucursal = 0;
  for (i = 0; i < local.ventas.length; i++) {
    // Nuevamente, nunca olvides escribir "var" antes de declarar la i de un for
    if (local.ventas[i].sucursal == sucursal) {
      totalSucursal += precioMaquina(local.ventas[i].componentes);
    }
  } return totalSucursal;
}

console.log(ventasSucursal('Centro')); // 4195

/*Las funciones ventasSucursal y ventasVendedora tienen mucho código en común, ya que es la misma funcionalidad pero trabajando con una propiedad distinta.
Entonces, ¿cómo harías para que ambas funciones reutilicen código y evitemos repetir?
*/

// Creé una función que recibe un valor cualquiera (puede ser una vendedora o una sucursal) y suma las ventas totales de ese parámetro

function SumarVentas(valor) {
  var total = 0;
  for (i = 0; i < local.ventas.length; i++) {
    // el var antes de la i :(
    var propiedades = Object.keys(local.ventas[i]);
    //console.log(propiedades)
    for (j = 0; j < propiedades.length; j++) {
      // y de la j :( :( :(
      var propiedad = propiedades[j];
      //console.log(local.ventas[i][propiedad])
      if (local.ventas[i][propiedad] == valor) {
        total += precioMaquina(local.ventas[i].componentes);
      }
    }
  } return total;
}
console.log(SumarVentas('Centro'));

// AMO esta solucion, super creativa y clara



/*Crear la función sucursalDelMes(mes, anio), que se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la sucursal que más vendió en plata en el mes.
No cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función precioMaquina.
*/

function sucursalDelMes(mes, anio) {
  var ventasCentro = 0;
  var ventasCaballito = 0;
  for (i = 0; i < local.ventas.length; i++) {
    // :( :( :( :( :( :(
    if (local.ventas[i].fecha.getMonth() + 1 == mes && local.ventas[i].fecha.getFullYear() == anio) {
      if (local.ventas[i].sucursal == 'Centro') {
        ventasCentro += precioMaquina(local.ventas[i].componentes)
      } else {
        ventasCaballito += precioMaquina(local.ventas[i].componentes)
      }
    }
  }
  if (ventasCentro > ventasCaballito) {
    return 'Centro'
  } else if (ventasCaballito > ventasCentro) {
    return 'Caballito'
  } else {
    return 'Premio compartido entre sucursales Centro y Caballito'
  }
}
console.log(sucursalDelMes(1, 2019)); // "Centro"

// bien!


/*3. Para tener una mejor muestra de como está resultando el local, queremos desarrollar un reporte que nos muestre las ventas por sucursal y por mes. 
Para esto, necesitamos crear las siguientes funciones:

renderPorMes(): Muestra una lista ordenada del importe total vendido por cada mes/año

*/

function renderPorMes() {
  var totalEnero = 0;
  var totalFebrero = 0;
  for (i = 0; i < local.ventas.length; i++) {
    //  :( :( :( :( :( :( :( :( :(
    if (local.ventas[i].fecha.getMonth() + 1 == 1 && local.ventas[i].fecha.getFullYear() == 2019) {
      totalEnero = ventasMes(1, 2019);
    } else if (local.ventas[i].fecha.getMonth() + 1 == 2 && local.ventas[i].fecha.getFullYear() == 2019) {
      totalFebrero = ventasMes(2, 2019);
    }
  } return 'Ventas por mes: ' + 'Total de enero 2019: ' + totalEnero +

    '. Total de febrero 2019: ' + totalFebrero;
}


console.log(renderPorMes());
// Ventas por mes:
//   Total de enero 2019: 1250
//   Total de febrero 2019: 4210


//renderPorSucursal(): Muestra una lista del importe total vendido por cada sucursal

function renderPorSucursal() {
  var ventasPorSucursal = [];
  for (i = 0; i < local.sucursales.length; i++) {
    // ya no se me ocurre que poner cada vez que encuentro un for sin el "var"
    ventasPorSucursal.push('Total de ' + local.sucursales[0] + ': ' + ventasSucursal(local.sucursales[0]));
    ventasPorSucursal.push(' Total de ' + local.sucursales[1] + ': ' + ventasSucursal(local.sucursales[1]));
    //intenté mil veces con ventasPorSucursal.push('Total de ' + local.sucursales[i] + ': ' + ventasSucursal(local.sucursales[i])) pero no funciona
  } return 'Ventas por sucursal: ' + ventasPorSucursal;
}
// No funciono de la manera en que querias porque te olvidaste de declarar "i", es decir, 
// de escribir "var i = 0" al comienzo de tu for
// Si hacemos dentro de tu for un console.log de "i" vas a ver que da 5 en lugar de 0
// Por que? Porque la i quedo con un valor anterior, de otro for, porque no volviste a declararla
// (Espero que ahora se entienda por que te puse tantas caritas tristes)
// Fijate que si agregas "var" antes de la i en el for, y lo probas de la manera en que querias, tu codigo funciona :)
console.log(renderPorSucursal());
// Ventas por sucursal:
//   Total de Centro: 4195
//   Total de Caballito: 1265


/*render(): Tiene que mostrar la unión de los dos reportes anteriores, cual fue el producto más vendido y la vendedora que más ingresos generó*/

function render() {
function vendedoraTop() {
  var cantidades = [];
  var valorMaximo = 100;
  var posicionDelValorMaximo = 0;
  for (i = 0; i < local.vendedoras.length; i++) {
    // :( 
    cantidades.push(ventasVendedora(local.vendedoras[i]));
    for (var j = 0; j < cantidades.length; j++) {
      // :) 
      if (cantidades[j] > valorMaximo) {
        valorMaximo = cantidades[j];
        posicionDelValorMaximo = j;
        //console.log(posicionDelValorMaximo)
      }
    }

  } return local.vendedoras[posicionDelValorMaximo];
} return 'Reporte: ' + renderPorMes() + renderPorSucursal() + 'Producto estrella: ' + componenteMasVendido() + 'Vendedora que más ingresos generó: ' + vendedoraTop();
}

console.log(render());
// Reporte
// Ventas por mes:
//   Total de enero 2019: 1250
//   Total de febrero 2019: 4210
// Ventas por sucursal:
//   Total de Centro: 4195
//   Total de Caballito: 1265
// Producto estrella: Monitor GPRS 3000
// Vendedora que más ingresos generó: Grace


