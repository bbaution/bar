//declaraciones👇
const menu = document.getElementById('menu');
const namee = document.getElementById("namee");
const price = document.getElementById( "price" );
const descr = document.getElementById( 'descr' );
const avaible = document.getElementById('avaible'); 
const readItem = document.getElementById('readItem');
let auxiliar
listar()



//funciones👇
async function listar() {
    resp = await axios.get('http://localhost:3000/products');
    menu.innerHTML = "";
    resp.data.forEach(element => {
        menu.innerHTML += '<li id="'+ element.id +'" class="item"><div><img src="../images/descarga.jpg" alt="Pizza" class="imagenMenu"><div><span>' + element.namee + '</span><p> disponible: ' + element.avaible + '</p><p> precio: ' + element.price + '</p></div><div class="btnItem"><button id="readItem" onclick="read(\''+ element.id +'\')" class="btn btn-warning"><i class="fa-solid fa-pencil"></i></button><button class="btn btn-warning" onclick="eliminar(\''+ element.id +'\')"  id="delete"><i class="fa-solid fa-trash"></i></button></div></div></li>';
    });
}
async function clearInputs() {
        namee.value = "",
        price.value = "",
        descrip.value = "",
        avaible.value = ""

}
async function create() {
    resp = await axios.post('http://localhost:3000/products',{
        namee: namee.value,
        price: price.value,
        description: descr.value,
        avaible: avaible.value
    });
    clearInputs()
}
async function read(id) {
    try {
        auxiliar = id;
        const resp = await axios.get('http://localhost:3000/products/' + id);
        namee.value = resp.data.namee,
        price.value = resp.data.price,
        descr.value = resp.data.description,
        avaible.value = resp.data.avaible;
    } catch (error) {
        console.log(error.message);
    }
    
}

async function eliminar(id){
    try {
         await axios.delete('http://localhost:3000/products/' + id);   
         alert("Se elimino correctamente");
    } catch (error) {
        console.log(error.message)
    }
}