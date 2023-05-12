import { useState,useEffect } from 'react'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection,getDocs, where,query } from 'firebase/firestore';
import { db } from '../../service/firebase/config';

const ItemListContainer = () => {

    const [products, setProducts] = useState ([]);

    const {idCategoria} = useParams ()

    useEffect ( ()=> {
       const misProductos = idCategoria ? query(collection (db, "productos"),where("idCat", "==", idCategoria)): collection(db, "productos"); 

       getDocs(misProductos)
         .then(res=> {
          const nuevosProductos = res.docs.map(doc => {
            const data = doc.data()
            return {id:doc.id, ...data}
          })
          setProducts(nuevosProductos);
         })
         .catch(error => console.log(error))
    }, [idCategoria])


    // useEffect( ()=> {

    //   const funcionProductos = idCategoria ? getProductosPorCategoria : getProducts;


    //   funcionProductos(idCategoria)
    //     .then(res => setProducts(res))
    //     .catch(error => console.log(error))
    // }, [idCategoria])

  return (
    <div>
      <h3 style={{textAlign: "center"}}> Productos </h3>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer
