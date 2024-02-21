
const d = document;
const mesas = d.getElementById("mesasPedidos");
const btnAgregar = d.getElementById("btn-Agregar");


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
            // date : "",
           // hour : "",
           // productId : "",
          // paymentId : "",
          // userId : "",
            tableId : mesas.value

        });


    } catch (error) {
        
    }
    

}
cargarMesas();