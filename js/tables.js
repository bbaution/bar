//declaraciones👇
const mesas = document.getElementById("mesas");
//llamados de funciones👇
listar()

//funciones👇
async function listar() {
    resp  = await axios.get('http://localhost:3000/tables');
    mesas.innerHTML = "";
    resp.data.forEach(element => {
        mesas.innerHTML += '<li> <div class="mesa"><a href="" class="">'+ element.tableId + '</a> </div> </li>';
        
    });
}