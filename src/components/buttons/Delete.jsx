// import { NavLink } from 'react-router-dom'
import { handleDelete } from '../../utils'

const Delete = () => {
  const addRoute = () => window.location.href = 'https://zzik-scandiweb.netlify.app/add-product'
  // const addRoute = () => window.location.href = 'http://localhost:5173/add-product'
  return <>
    {/* <NavLink to={"/add-product"}>ADD</NavLink> */}
    <button onClick={addRoute}>ADD</button>
    <button onClick={handleDelete}>MASS DELETE</button>
  </>
}

export default Delete