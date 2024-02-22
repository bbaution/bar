const apiUrl = 'http://localhost:3000/order'
const d = document;
const mesas = d.getElementById("mesasPedidos");
const btnAgregar = d.getElementById("btn-Agregar");
const pedidos = d.getElementById("pedidos");
const date = d.getElementById("date");
const hour = d.getElementById("hour")
const productId = d.getElementById("productId");
const paymentId = d.getElementById("paymentId");
const userId = d.getElementById("userId");



//mostrar mesas
const cargarMesas = async() =>{

    try {
        const respMesas = await axios.get("http://localhost:3000/tables")
        mesas.innerHTML = ""  
        respMesas.data.forEach(el => {
            mesas.innerHTML += '<option value="'+el.id+'">'+el.id+'</option>'
            
        });
    } catch (error) {
        console.log(error.message)
        
    }
  

}

//guardar pedido
const Guardar = async () => {
    try {
        const resp = await axios.post("http://localhost:3000/order",
        {
            date : iDate.value,
            hour : iHour.value,
            productId : productId.value,
            paymentId : paymentId.value,
            userId : userId.value,
            tableId : mesas.value

        });


    } catch (error) {
        console.log(error)
    }
    

}

const Listar = async() => {
    try {
        const respListado = await axios.get("http://localhost:3000/order")           
          pedidos.innerHTML = ""
            respListado.data.forEach(el => {
               pedidos.innerHTML += '<ul><li>Mesa: ""'+el.tableId+'""Pedido: '+el.id+'<li/>  <button class="btn btn-danger" onclick="Eliminar(\''+el.id+'\')"><i class="fa-solid fa-trash"></i></button><ul/>'
            })
            
        
    } catch (error) {
        console.log(error.message)
    }
}


const Eliminar = async(id) => {
    try {
        const resp = await axios.delete(`${apiUrl}/${id}`);
        if(resp.status === 200){
            console.log("Mesa borrada con exito.")

        }else{
            console.log("Error al eliminar")
        }
    } catch (error) {
        console.log("Error en la solicitud DELETE", error.message)
    }

}

//cargar fecha de hoy👇
const iDate = d.getElementById('iDate')
const  dateNow = new Date().toISOString().split('T')[0]
iDate.value=dateNow;

//cargar hora 👇
function actualizarHora() {
    const iHour = d.getElementById('iHour')
    const now = new Date();
    const timeNow = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');

    iHour.value = timeNow
}
actualizarHora()
setInterval(actualizarHora, 600)

//Llamado de funciones
Listar()
cargarMesas();
