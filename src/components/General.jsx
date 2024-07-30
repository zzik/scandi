import { useContext } from "react"
import DetailsContext from "../context/DetailsContext"

const General = () => {
  const details = useContext(DetailsContext)

  return (
    <div>
        <div>            
            <label htmlFor="sku">SKU</label>
            <input type="text" name="sku" onChange={(e) => details.sku = e.target.value} />
        </div>
        <div>            
            <label htmlFor="name">Name</label>
            <input type="text" name="name"  onChange={(e) => details.name = e.target.value} />
        </div>
        <div>            
            <label htmlFor="price">Price</label>
            <input type="text" name="price"  onChange={(e) => details.price = e.target.value} />
        </div>
    </div>
  )
}

export default General