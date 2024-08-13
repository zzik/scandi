import { NavLink } from 'react-router-dom'
import { massDelete } from '../../utils'

const Delete = () => {
  const addRoute = () => window.location.href = 'https://zzik-scandiweb.netlify.app/add-product'
  return <>
    <NavLink to={'add-product'}>ADD</NavLink>
    {/* <button onClick={addRoute}>ADD</button> */}
    {/* <label htmlFor="delete">MASS DELETE</label>
    <input type='button' onClick={massDelete} name='delete' /> */}
    <button onClick={()=>massDelete()}>MASS DELETE</button>
  </>
}

export default Delete