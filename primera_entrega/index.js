console.log("Hello");
products = []
for (i=0;i < 2; i++){
    nombre_producto = prompt("Ingresar el nombre del producto: ")
    precio = prompt("Ingresar el precio del producto: ")
    descuento = prompt("Ingresar el descuento del producto: ")
    producto = {
        'nombre' : nombre_producto,
        "precio" : precio,
        "descuento": descuento
    }
    products.push(producto)
}

for (i = 0; i < products.length; i++){
    descuento_producto = calcular_descuento(products[i].precio, products[i].descuento)
    console.log(`Total con descuento aplicado ${products[i].nombre} --> ${products[i].precio-descuento_producto}`)
}


function calcular_descuento(precio, descuento){
    return precio * (descuento/100)
}
