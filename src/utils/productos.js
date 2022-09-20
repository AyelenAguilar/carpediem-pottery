const datosProductos=[
    {
        id:1,
        titulo:"Taza osito cariñosito",
        imagen:"tazaositocariñosito.jpg",
        precio:"890",
        detalle:"Cuerpo entero de cerámica de excelente calidad y resistencia, apto para microondas y lavavajillas. Soportan altas temperaturas y posee una capacidad de 300 ml. Ideal para uso diario",
        categoriaId:9,
        stock:"8"
    },

    {
        id:2,
        titulo:"Porta sahumerio",
        imagen:"portasahumeriooso.jpg",
        precio:"650",
        detalle:"Este porta sahumerio es ideal para decorar espacios de trabajo, estudio y ocio. Además de darle una vista mas agradable a tus espacios cumple con la función de sostener los sahumerios de la fragancia que elijas! Decoración y utilidad en un accesorio unico",
        categoriaId:8,
        stock:"20"
    },

    {
        id:3,
        titulo:"Lanero de botones",
        imagen:"lanero.jpg",
        precio:"800",
        detalle:"Pensado para ayudar a sostener el estambre a la hora de tejer, bordar, etc. Pieza realizada con torno, horno a altas temperaturas y decoración a mano. Consulta por colores y grabados personalizados.",
        categoriaId:8,
        stock:"10"
    },

    {
        id:4,
        titulo:"Platos infantiles",
        imagen:"platosinfantiles.jpg",
        categoriaId:7,
        precio:"1200",
        detalle:"Platitos de cerámica semihondos ideal para niños de 2-5 años. Para regalar o disfrutar. Son únicos, no vas a encontrar otros iguales.",
        stock:"15"
    },

    {
        id:5,
        titulo:"Plato born this way",
        imagen:"platoarcoiris.jpg",
        precio:"1500",
        detalle:"Plato pintado y grabado a mano, también puede servir como cenicero ya que tiene aberturas para apoyar. Ideal para agasajar a seres queridos!",
        categoriaId:7,
        stock:"20"
    },

    {
        id:6,
        titulo:"Set plato frutal",
        imagen:"kitplatosfrutales.jpg",
        precio:"4000",
        detalle:"Set de plato grande tipo bowl con cuchara de cerámica, hondos y resistentes a altas temperaturas, apto microondas. Barnizado 2 veces. (Precio por set)",
        categoriaId:7,
        stock:"15"
    },

    {
        id:7,
        titulo:"Taza Principito",
        imagen:"tazaprincipito.jpg",
        precio:"2000",
        detalle:"Taza inspirada en el principito. Pieza hecha en torno de barro, pasada por horno, esmaltada y barnizada. Decoraciones hechas en porcelana.",
        categoriaId:9,
        stock:"12"
    },

    {
        id:8,
        titulo:"Maceta Perrito",
        imagen:"macetaperrito.jpg",
        precio:"1500",
        detalle:"Mini maceta con forma de perrito, cuenta con oricifios pequeños en la parte de abajo para filtrar el agua, decoración para interiores y exteriores",
        categoriaId:8,
        stock:"9"
    }
    

]

const getProductos=(time) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(datosProductos)
        }, time)
    })
}

export default getProductos;