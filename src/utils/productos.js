const datosProductos=[
    {
        id:1,
        titulo:"Taza osito cariñosito",
        imagen:"tazaositocariñosito.jpg",
        precio:"890",
        stock:"8"
    },

    {
        id:2,
        titulo:"Portasahumerio oso perezoso",
        imagen:"portasahumeriooso.jpg",
        precio:"650",
        stock:"20"
    },

    {
        id:3,
        titulo:"Lanero de botones",
        imagen:"lanero.jpg",
        precio:"800",
        stock:"10"
    },

    {
        id:4,
        titulo:"Platos infantiles",
        imagen:"platosinfantiles.jpg",
        precio:"1200",
        stock:"15"
    },

    {
        id:5,
        titulo:"Plato born this way",
        imagen:"platoarcoiris.jpg",
        precio:"1500",
        stock:"20"
    },

    {
        id:6,
        titulo:"Kit plato frutal",
        imagen:"kitplatosfrutales.jpg",
        precio:"2000",
        stock:"15"
    },


]

const getProductos=() =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(datosProductos)
        }, 2000)
    })
}

export default getProductos;