import { useContext } from "react";
import {useParams} from 'react-router-dom'
import Context from "../Context";
import DetallePublic from '../components/DetallePublic'

const InfoPublic = () => {
  const { id } = useParams();

  /*Paso variables a través del Context */
  const {listProd} = useContext(Context)
  
  const selectedProduct = listProd.filter((e) => e.id === id);

  return (
    <div className="container">
      {selectedProduct.length > 0 ? selectedProduct.map((e, i) => (
        <DetallePublic selectedProduct={e} key={i} />
      )):null
      }
    </div>
    
  )
}

export default InfoPublic