import { useEffect, useState } from "react"
import { ItemDetail } from "./ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getFirestore, doc, getDoc } from "firebase/firestore"

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams()

    useEffect(()=>{
        const db = getFirestore()
        const queryDoc = doc(db, 'products', id)
        getDoc(queryDoc)
        .then (resp => ( { id: resp.id, ...resp.data() } ) )
        .then (resp => setProduct(resp))
    },[])



  return (
    <div>
        <ItemDetail product={product}/>
    </div>
  )
}

export default ItemDetailContainer