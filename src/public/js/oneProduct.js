const addToCartThis = async (cartId, prodId) => {
    // console.log("ADTOCARTTHIS")
    console.log(cartId);
    console.log(prodId);

    const resp = await fetch(`http://backend-16d8.onrender.com/api/carrito/${cartId}/products/${prodId}`,{
        method: "POST"
    })
    console.log("RESPUESTA---------");
    console.log( await resp);
}

const deleteProduct = async (id_prod) => {
    console.log("Eliminando Producto by owner----------");

    const resp = await fetch(`http://backend-16d8.onrender.com/api/producto/${id_prod}`,{
        method: "DELETE"
    })

    console.log(resp);

    location.href = `http://backend-16d8.onrender.com/views/products?page=1&limit=2`;
}