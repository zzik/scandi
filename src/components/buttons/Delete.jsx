import { NavLink } from 'react-router-dom'
import { handleDelete } from '../../utils'

const Delete = () => {
  return <>
    <NavLink to={"/add-product"}>ADD</NavLink>
    <button onClick={handleDelete}>MASS DELETE</button>
  </>
}

export default Delete