// // const costoProducto1=2000;
// // const costoProducto2=4000;
// // const costoProducto3=20000;



// // let total=0;
// // do{
    
// //     let valorIngresado=prompt("BIENVENIDO A BOCASTORE\nSeleccione el producto que desea comprar\n1.Short Masculino talle M-$2000\n2.Remera de futbol Bover S-$4000\n3.Pelota N5 Mundial-$20000");
// //     if(valorIngresado=="1"){
// //         total+=costoProducto1;
// //     }else if(valorIngresado=="2"){
// //         total+=costoProducto2;
// //     }else if(valorIngresado=="3"){
// //         total+=costoProducto3;
// //     }else{
// //         alert("El valor ingresado no es valido");
// //     }
// // }while(confirm("Desea seguir comprando?"))

// // mostrarTotal(total);//4000



// //Este es el constructor de la clase producto
// function Producto(nombre,precio,color,talle,sexo){
//     this.nombre=nombre;
//     this.precio=precio;
//     this.color=color;
//     this.talle=talle;
//     this.sexo=sexo;
// }
// //La funcion la hicimos para usar funciones, porque lo pedia
// function agregarYMostrarProductos(productos,productoAAgregar){
//     productos.push(productoAAgregar);
//     // console.log(productoAAgregar);
// }
// //El new se usa para crear un objeto de una clase
// const camisetaBoca=new Producto("Camiseta",14000,"Azul y amarillo","M","Hombre");
// const shortArgentina=new Producto("Short",6000,"Negro","L","Mujer");
// const pelotaMundial=new Producto("Pelota",20000,"Blanco","11",null);

// const productos=[];
// agregarYMostrarProductos(productos,camisetaBoca);
// agregarYMostrarProductos(productos,shortArgentina);
// agregarYMostrarProductos(productos,pelotaMundial);
// // console.log(productos);

// //Esta const declarada, va a TOMAR EL VALOR de cada uno de los elementos del array
// //en cada una de las iteraciones
// for(const producto of productos){
//     // if(producto.talle=="M"){
//     //     console.log(producto);
//     // }
//     console.log(producto.nombre);
// }
// //filter busca, por la condicion que le escribas, y guarda donde lo asignes,en este caso "resultado".

// //----- La funcion flecha, reemplaza esto, el escribir toda la funcion,
// // function(producto,talle){
// //     if(producto.talle==talle){
// //         //producto te lo manda
// //     }
// // }



// //Este "producto", cumple la misma funcion , que la variable declarada en for of , va tomando 
// //los valores del array
// const resultado= productos.filter((producto)=>producto.talle=="L");
// console.log(resultado);

let stock=[
    {
        "nombre":"Assassins Creed IV",
        "precio":4000,
        "descripcion":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic necessitatibus autem impedit fuga error possimus, iusto veritatis id? Facere iure soluta nemo eius illum,amet quisquam voluptatibus quis optio voluptatum.",
        "genero":"Aventura",
        "id":1
    },
    {
        "nombre":"Assassins Creed Odissey",
        "precio":5000,
        "descripcion":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic necessitatibus autem impedit fuga error possimus, iusto veritatis id? Facere iure soluta nemo eius illum,amet quisquam voluptatibus quis optio voluptatum.",
        "genero":"Aventura",
        "id":2
    },
    {
        "nombre":"Assassins Creed Origins",
        "precio":6000,
        "descripcion":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic necessitatibus autem impedit fuga error possimus, iusto veritatis id? Facere iure soluta nemo eius illum,amet quisquam voluptatibus quis optio voluptatum.",
        "genero":"Aventura",
        "id":3
    },
    {
        "nombre":"Assassins Creed Syndicate",
        "precio":7000,
        "descripcion":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic necessitatibus autem impedit fuga error possimus, iusto veritatis id? Facere iure soluta nemo eius illum,amet quisquam voluptatibus quis optio voluptatum.",
        "genero":"Aventura",
        "id":4
    }];
    let carrito=[];
    if(localStorage.getItem("carrito") !=null){
        carrito=JSON.parse(localStorage.getItem("carrito"));
        
    }

                            //OBJETO JAVASCRIPT
function mostrarProductosDOM(producto){
    
    let div=document.createElement('div');
    div.setAttribute("id",`ProductoCarrito${producto.id}`);
    div.innerHTML=`
    <h3>${producto.nombre}</h3>
    <h3>${producto.precio}</h3>
    <h3 id=cantidad${producto.id}>Cantidad:1</h3>
    <button id=botonSumar${producto.id}>+</button>
    <button id=botonRestar${producto.id}>-</button>
    `
    let listaProductoscarrito=document.getElementById("ListaProductosCarrito");
    listaProductoscarrito.append(div);

    let botonSumar=document.getElementById(`botonSumar${producto.id}`);
    botonSumar.onclick=()=>{
        carrito.forEach(productoCarrito=>{
            if(productoCarrito.id==producto.id){
                productoCarrito.cantidad+=1;
            }
            let cantidadDom=document.getElementById(`cantidad${producto.id}`);
            cantidadDom.innerHTML=`Cantidad:${productoCarrito.cantidad}`
        });
        localStorage.setItem("carrito",JSON.stringify(carrito));
        console.log(carrito);
    }

    let botonRestar=document.getElementById(`botonRestar${producto.id}`);
    botonRestar.onclick=()=>{
        carrito.forEach(productoCarrito=>{
            if(productoCarrito.id==producto.id){
                //Si la cantidad es mayor a 1 , resto con normalidad
            if(productoCarrito.cantidad>1){     

                    productoCarrito.cantidad-=1;
                    let cantidadDom=document.getElementById(`cantidad${producto.id}`);
                    cantidadDom.innerHTML=`Cantidad:${productoCarrito.cantidad}`
            }else{//cantidad=1 y quiere restar
                    //LO ELIMINE DEL CARRITO

                    //Lo elimina del DOM
                    let productoDomAEliminar=document.getElementById(`ProductoCarrito${producto.id}`);
                    listaProductoscarrito.removeChild(productoDomAEliminar);

                    //Lo elimina del array del carrito
                    let indiceProductoAEliminar=carrito.indexOf(productoCarrito);
                    carrito.splice(indiceProductoAEliminar,1);
                    localStorage.setItem("carrito",JSON.stringify(carrito));
            }
            }
        });
        console.log(carrito);
    }
    
}
carrito.forEach(productoCarrito=>{
    mostrarProductosDOM(productoCarrito);
});




console.log(carrito);
stock.forEach(producto =>{
    let div=document.createElement('div');
     div.innerHTML=`
        <h3>${producto.nombre}</h3>
        <button id=boton${producto.id}>Comprar</button>
     `
     let main=document.getElementById("main");
    main.append(div);
     let boton=document.getElementById(`boton${producto.id}`);
     boton.onclick=()=>{
        //Si el carrito no esta vacio, lo recorro, y valido si el producto que clickeo el cliente esta

            
            let productoEstaEnElCarrito=false;
            
            carrito.forEach( productoCarrito=>{
                if(producto.id==productoCarrito.id){
                    //Si lo encontro, sumo uno a la cantidad, y paso la variable que usamos para saber si encontro, a true. Para usarla abajo
                    productoEstaEnElCarrito=true;
                }
            });
            //Si el producto , no esta en el carrito, se agrega al carrito con push
            if(!productoEstaEnElCarrito){
                carrito.push(
                    {
                        "id":`${producto.id}`,
                        "nombre":`${producto.nombre}`,
                        "precio":`${producto.precio}`,
                        "cantidad":1
                    }
                );
                    mostrarProductosDOM(producto);
            }

        
       
         console.log(carrito);
         localStorage.setItem("carrito",JSON.stringify(carrito));
     }
     
}); 