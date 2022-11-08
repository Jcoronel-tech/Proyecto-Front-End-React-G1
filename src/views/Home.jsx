import React, {useContext} from 'react'
import Context from '../Context';
import login from '../assets/img/login-google.png'

const Home = () => {
  const {listProd} = useContext(Context);

  
  return (
    <div className='container '>
      <h1>Iniciar Sesión</h1>
      <form >
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
      </form>
      <h1>Iniciar Sesión con:</h1>
      <div>
        <img src={login} alt="" width="300"/>
      </div>
      <p>Ó</p>
      <button type="submit" class="btn btn-primary">Registrate aqui</button>
    </div>
  )
}

export default Home