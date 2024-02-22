const apiUrl = 'http://localhost:3000/order'
const d = document;
const mesas = d.getElementById("mesasPedidos");
const btnAgregar = d.getElementById("btn-Agregar");
const pedidos = d.getElementById("pedidos");
const date = d.getElementById("date");
const hour = d.getElementById("hour")
const product_id = d.getElementById("product-id");
const payment_id = d.getElementById("payment-id");
const user_id = d.getElementById("ussser-id");



//mostrar mesas
const cargarMesas = async() =>{

    try {
        const respMesas = await axios.get("http://localhost:3000/tables")
        mesas.innerHTML = ""  
        respMesas.data.forEach(el => {
            mesas.innerHTML += '<option value="'+el.tableId+'">'+el.tableId+'</option>'
            
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
             date : date.value,
            hour : hour.value,
            productId : product_id.value,
            paymentId : payment_id.value,
             userId : user_id.value,
            tableId : mesas.value

        });


    } catch (error) {
        
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

//Llamado de funciones
Listar()
cargarMesas();
Eliminar();