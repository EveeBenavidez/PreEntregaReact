// const products = [
//     {nombre:"Jordan 1 Retro",stock: 20 , precio: 90000, id:"1",img: "../imgs/Jordan1Retro.jpeg",idCat: "1"},
//     {nombre:"Jordan Zion 1",stock: 10 , precio: 95000, id: "2",img: "../imgs/JordanZion1B.jpeg",idCat: "2"},
//     {nombre:"Puma Old School",stock: 10 , precio: 92000, id: "3",img: "../imgs/PumaRetroB.jpeg",idCat: "4"},
//     {nombre:"Air Camo Jordan",stock: 10 , precio: 89000, id: "4",img: "../imgs/JordanCamo.jpeg",idCat: "3"},
//     {nombre:"Air Max 97 SE",stock: 10 , precio: 90000, id:"5",img: "../imgs/AirMax97SE.jpeg",idCat: "1"},
//     {nombre:"Air Max Flicknit",stock: 10 , precio: 95000, id: "6",img: "../imgs/AirMaxFliknit.jpeg",idCat: "2"},
//     {nombre:"Air Max 97 GREY",stock: 10 , precio: 89000, id: "7",img: "../imgs/AirMax97Grey.jpeg",idCat: "3"},
//     {nombre:"Air Max Rose",stock: 10 , precio: 89000, id: "8",img: "../imgs/AirMaxRose.jpeg",idCat: "3"}
    
// ]

// export const getProducts = () => {
//     return new Promise ((resolve) => {
//         setTimeout(() =>{
//             resolve(products);
//         }, 100)
//     })
// }


// //nueva funcion solo para retornar un item

// export const getUnProducto = (id) => {
//     return new Promise (resolve => {
//         setTimeout(() => {
//             const producto = products.find(prod => prod.id === id)
//             resolve(producto);
//         }, 100);
//     })
// }

// // funcion para categoria

// export const getProductosPorCategoria = (idCategoria) => {
//     return new Promise (resolve => {
//         setTimeout(() => {
//             const productosCategoria = products.filter(prod => prod.idCat === idCategoria)
//             resolve(productosCategoria)
//         }, 100);
// })
// }