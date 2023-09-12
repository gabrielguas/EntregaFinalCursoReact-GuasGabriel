import { useEffect, useState } from "react"
import { ItemDetail } from "./ItemDetail/ItemDetail"
import { mFetch } from "../utils/mockFetch"
import { useParams } from "react-router-dom"

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams()

    useEffect(()=>{
        mFetch(Number(id))
        .then(product => setProduct(product))
        .catch(err => console.log(err))
        //.finally(set loading)
    },[])



  return (
    <div>
        <ItemDetail product={product}/>
    </div>
  )
}

export default ItemDetailContainer