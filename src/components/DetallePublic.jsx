import React,  { useContext } from 'react'
import Context from '../Context';

const DetallePublic = ({selectedProduct}) => {
    const {addToshipping} = useContext(Context);
    

    return (

    <div className="card">
        <div className="row g-0" >
            <div className="col-md-4">
            <img className='img-fluid rounded-start' src={selectedProduct.img} alt="img" />
            </div>
            <div className="col-md-8">
                <div class="card-body">
                <div className="card-body">
                    <h3 className="card-title">{selectedProduct.name}</h3>
                </div>
                    <ul className="list-group list-group-flush p-3">
                    <h5>Descripcion</h5>
                    </ul>
                    <h4>Precio:💲{selectedProduct.price}</h4>
                    <button class="btn btn-danger m-2" type="button" onClick={ () => addToshipping(selectedProduct)}>
                    <span>Añadir</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetallePublic