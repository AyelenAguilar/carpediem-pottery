const datosProductos=[
    {
        id:1,
        titulo:"Taza osito cariñosito",
        imagen:"https://firebasestorage.googleapis.com/v0/b/carpediem-ce31d.appspot.com/o/tazaositocari%C3%B1osito.jpg?alt=media&token=b139e6ff-cb65-4e9f-ad7a-d98d04e40fee",
        precio:"890",
        detalle:"Cuerpo entero de cerámica de excelente calidad y resistencia, apto para microondas y lavavajillas. Soportan altas temperaturas y posee una capacidad de 300 ml. Ideal para uso diario",
        categoriaId:9,
        stock:"8"
    },

    {
        id:2,
        titulo:"Porta sahumerio",
        imagen:"https://firebasestorage.googleapis.com/v0/b/carpediem-ce31d.appspot.com/o/portasahumeriooso.jpg?alt=media&token=f22f2b05-f772-4254-a81f-7c1f5e842228",
        precio:"650",
        detalle:"Este porta sahumerio es ideal para decorar espacios de trabajo, estudio y ocio. Además de darle una vista mas agradable a tus espacios cumple con la función de sostener los sahumerios de la fragancia que elijas! Decoración y utilidad en un accesorio unico",
        categoriaId:8,
        stock:"20"
    },

    {
        id:3,
        titulo:"Lanero de botones",
        imagen:"https://firebasestorage.googleapis.com/v0/b/carpediem-ce31d.appspot.com/o/lanero.jpg?alt=media&token=7377d088-bf76-46c0-ac70-1c5a516eb8aa",
        precio:"800",
        detalle:"Pensado para ayudar a sostener el estambre a la hora de tejer, bordar, etc. Pieza realizada con torno, horno a altas temperaturas y decoración a mano. Consulta por colores y grabados personalizados.",
        categoriaId:8,
        stock:"10"
    },

    {
        id:4,
        titulo:"Platos infantiles",
        imagen:"https://firebasestorage.googleapis.com/v0/b/carpediem-ce31d.appspot.com/o/platosinfantiles.jpg?alt=media&token=ecfd30fd-e342-4671-86a0-8dd67898818a",
        categoriaId:7,
        precio:"1200",
        detalle:"Platitos de cerámica semihondos ideal para niños de 2-5 años. Para regalar o disfrutar. Son únicos, no vas a encontrar otros iguales.",
        stock:"15"
    },

    {
        id:5,
        titulo:"Plato born this way",
        imagen:"https://firebasestorage.googleapis.com/v0/b/carpediem-ce31d.appspot.com/o/platoarcoiris.jpg?alt=media&token=6384e716-4374-42de-affa-9e8cf8c9a5ac",
        precio:"1500",
        detalle:"Plato pintado y grabado a mano, también puede servir como cenicero ya que tiene aberturas para apoyar. Ideal para agasajar a seres queridos!",
        categoriaId:7,
        stock:"20"
    },

    {
        id:6,
        titulo:"Set plato frutal",
        imagen:"https://firebasestorage.googleapis.com/v0/b/carpediem-ce31d.appspot.com/o/kitplatosfrutales.jpg?alt=media&token=f4b98799-c0bc-4a6e-9cf7-81c93266d227",
        precio:"4000",
        detalle:"Set de plato grande tipo bowl con cuchara de cerámica, hondos y resistentes a altas temperaturas, apto microondas. Barnizado 2 veces. (Precio por set)",
        categoriaId:7,
        stock:"15"
    },

    {
        id:7,
        titulo:"Taza Principito",
        imagen:"https://firebasestorage.googleapis.com/v0/b/carpediem-ce31d.appspot.com/o/tazaprincipito.jpg?alt=media&token=70751372-e4ce-45de-949a-2c3fe8ac0df5",
        precio:"2000",
        detalle:"Taza inspirada en el principito. Pieza hecha en torno de barro, pasada por horno, esmaltada y barnizada. Decoraciones hechas en porcelana.",
        categoriaId:9,
        stock:"12"
    },

    {
        id:8,
        titulo:"Maceta Perrito",
        imagen:"https://firebasestorage.googleapis.com/v0/b/carpediem-ce31d.appspot.com/o/macetaperrito.jpg?alt=media&token=2964d88a-357e-46f8-a7dd-6bacbb7eef2d",
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