console.log("JS ACTIVO")

const postCompra = async (id) => {
    console.log(id);
    const resp = await fetch(`https://backend-16d8.onrender.com/api/carrito/${id}/purchase`, {
        method: "GET"
    })
    console.log(resp);
    // location.href = `https://backend-16d8.onrender.com/views/cart/${id}`;
}

const cartEmpty = async (id) => {
    const resp = await fetch(`https://backend-16d8.onrender.com/api/carrito/${id}`, {
        method: "DELETE"
    })
    location.href = `https://backend-16d8.onrender.com/views/cart/${id}`;
}