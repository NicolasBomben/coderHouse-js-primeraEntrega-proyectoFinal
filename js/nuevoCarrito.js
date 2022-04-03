//donde almaceno lo que se seleccion para el carro
const carritoDeCompras = [];


const productosEnTienda =[{
    "id": "remeraNegra",
    "nombre": "REMERA BASICA NEGRA",
    "precio": 2800,
    "talle": "M,L,XL",
    "imagenURL": '../images/RemeraBasicaNegra.jpeg'
},
{
    "id": "morralUno",
    "nombre": "MORRAL 01",
    "precio": 1800,
    "talle": "UNICO",
    "imagenURL": '../images/Morral01.jpeg'
},
{
    "id": "joggerNegro",
    "nombre": "PANTALON JOGGER ESTAMPADO",
    "precio": 5000,
    "talle": "32,36.38",
    "imagenURL": '../images/PantalonJoggerEstampado.jpeg' 
},
{
    "id": "remeraBlanca",
    "nombre": "REMERA BASICA BLANCA",
    "precio": 2800,
    "talle": "M,L,XL",
    "imagenURL": '../images/RemeraBasicaBlanca.jpeg' 
},
{
    "id": "gorraBlock",
    "nombre": "GORRA COLOR BLOCK",
    "precio": 1500,
    "talle": "UNICO",
    "imagenURL": '../images/GorraColorBlock.jpeg' 
},
{
    "id": "joggerSoft",
    "nombre": "PANTALON SOFT DENIM ACID",
    "precio": 4500,
    "talle": "32,36,38",
    "imagenURL": '../images/PantalonSoftDenimAcid.jpeg' 
}
]



//muestro productos por DOM.
function mostrarProductos(){
    const containerProductos = document.getElementById("contenedor");
    for( productos of productosEnTienda ){
        const contenedor = `
        <div class="card">
                      <div class="image-container">
                          <img class="card-image" src=${productos.imagenURL}/>
                      </div>
                      <div class="card-description">
                        <h3>${productos.nombre}</h3>
                        <h3>${productos.precio}</h3>
                        <h4>${productos.talle}</h4>
                        <br>
                        <button class="btn" id=${productos.id}>AGREGAR AL CARRITO</button>
                      </div>
                  </div>
        `;
        containerProductos.innerHTML += contenedor;
    }
}
mostrarProductos();


//evento al boton de comprar
const btnCarrito = document.querySelectorAll(".btn");
//uso el for each ya que son mas de uno y utilizo el queryselector con la class btn
btnCarrito.forEach(btn => {
    btn.addEventListener( 'click', () => {
        let btnId = btn.getAttribute("id");
        for(productos of productosEnTienda){
            if(productos.id === btnId){
                carritoDeCompras.push(productos);
            }
        }
        mostrarItemsCarrito();
        alert("Producto Agregado");
    });
});

function mostrarItemsCarrito() {
    const tabladeItems = document.getElementById('tabla');
    for (datos of carritoDeCompras) {
        const contenedorTabla = `
        <div class="table-title">
            <h3>Data Table</h3>
        </div>
        <table class="table-fill">
        <thead>
        <tr>
        <th class="text-left">PRODUCTO</th>
        <th class="text-left">PRECIO</th>
        </tr>
        </thead>
        <tbody class="table-hover">
        <tr>
        <td class="text-left">${datos.nombre}</td>
        <td class="text-left">${datos.precio}</td>
        </tr>
        </tbody>
        </table>
        `;
        tabladeItems.innerHTML += contenedorTabla;
    }
    guardarCarrito();
}

const guardarCarrito = ()=> {
    localStorage.setItem("CarritoAbandonado",JSON.stringify(carritoDeCompras));
}
