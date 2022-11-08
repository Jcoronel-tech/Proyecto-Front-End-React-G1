import React, {useContext} from 'react'
import Context from '../Context';
import { useNavigate } from 'react-router-dom';

const CardPublic = ({datos}) => {

    const { shipping } = useContext(Context)
    const navigate = useNavigate();

    const getDetailsLink = (datos) => {
        navigate(`/InfoPublic/${datos}`)
    };

return (
    
<div className="col-12 col-lg-4 p-3">
    <div className="card" >
        <img src={datos} alt="img" />
        <div className="card-body">
            <h3 className="card-title">{}Aca va titulo</h3>
            
        </div>
            <ul className="list-group list-group-flush p-3">
            <h5>Descripcion</h5>
            </ul>
        <div className="card-body">
            <div className="d-grid gap-2 d-md-block text-center">
            <div>
                <h4>💲{datos.price}</h4>
            </div>
            <button className="btn btn-secondary m-2" type="button" onClick={() => getDetailsLink(datos.id)}>
                <span>Ver Más 👀</span>
            </button>
            </div>
        </div>
    </div>
</div>

  )
}

export default CardPublic