import { massDelete } from '../../utils'

const Delete = () => {
  const addRoute = () => window.location.href = 'https://zzik-scandiweb.netlify.app/add-product'
  return <>
    <button onClick={addRoute}>ADD</button>
    <button onClick={massDelete}>MASS DELETE</button>
  </>
}

export default Delete