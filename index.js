//Cargamos datos iniciales de la factura

class NuevaFactura {
    constructor(numFC, montoFC, tipoDeCambio, fechaDePago,){
        this.numFC = parseInt(prompt("Numero de factura"));
        this.montoFC = parseInt(prompt("Monto de la factura en USD"));
        this.tipoDeCambio = parseInt(prompt("Tipo de cambio"));
        this.montoArp = this.montoFC * this.tipoDeCambio;
        this.tipoDeCambioPago = parseInt(prompt("Tipo de cambio de pago"));
    };

};

//Se almacena la factura en variable

const factura1 = new NuevaFactura ();

console.log(factura1)

// Asigne los valores a una variable para no pasar parametros tan grandes en el if.
let montoFacturado = factura1.montoArp;
let montoPagado = factura1.montoFC * factura1.tipoDeCambioPago;

console.log(`Se genero factura numero ${factura1.numFC}
Monto facturado en ARP: ${montoFacturado}
Monto abonado en ARP: ${montoPagado}`);

// Toma el valor en pesos de la factura segun la cotizacion informada, y lo compara contra el valor en pesos de la factura pero con la cotizacion de la fecha de pago
// Se almacena la diferencia en variable y se genera un documento a pagar o descontar segun si monto en pesos del pago es mayor o menor al monto en pesos de la factura.
if (montoFacturado, montoPagado) {
    montoFacturado > montoPagado;
    diferenciaACobrar = montoFacturado - montoPagado;
    console.log(`El monto abonado es menor al facturado. Se emitira Nota de debito por ${diferenciaACobrar}`);
}   else if (montoFacturado, montoPagado) {
    montoFacturado < montoPagado;
    diferenciaADescontar = montoPagado - montoFacturado;
    console.log(`El monto abonado es mayor al facturado. Se emitira Nota de credito por ${diferenciaADescontar}`);
} else {console.log("El comprobante fue abonado correctamente");}
