const menu = document.getElementById('menu');


listar()

//funciones👇
async function listar() {
    resp  = await axios.get('http://localhost:3000/products');
    menu.innerHTML = "";
    resp.data.forEach(element => {
        menu.innerHTML += '<li id="item"><div><img src="../images/descarga.jpg" alt="Pizza" class="imagenMenu"><div><span>'+ element.name+'</span><p>'+ element.description +'</p></div><div class="btnItem"><button class="btn"><i class="fa-solid fa-plus"></i></button><span class="cantItem mx-3">0</span><button class="btn"><i class="fa-solid fa-minus"></i></button></div></div></li>';
    });
}