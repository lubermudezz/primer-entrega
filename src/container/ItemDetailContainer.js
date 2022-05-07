import { useEffect, useState } from "react"
import { Items as itemData } from "../data/Items.js"
import { useParams } from "react-router-dom"

const ItemDetailContainer = (props) => {
   const [items, setItems] = useState({})
   const { itemId } = useParams();

   useEffect(() => {
      (async () => {
          const detalle = await getItemDetail ()
        //   console.log(detalle);
        //   console.log("funcione")
          setItems(detalle)
      })()

   },[])

   const getItemDetail = () => {
       return new Promise((resolve) => {
           setTimeout(() => {
               resolve(itemData.find(r=>r.id == itemId))
           }, 2000)
       })
   }
   
    return(
        <>
      <h1>DETALLE DEL PRODUCTO:</h1>
      <p>Nombre del producto: {items.name}</p>
      <p>Precio del producto: {items.price}</p>
      <p>Tamaño del producto: {items.tamaño}</p>
      <img src={items.image} width="50%" height="50%"></img>
       

    </>
    )
}

export default ItemDetailContainer;