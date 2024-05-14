import Cart from "../cart/Cart"
import NavigationBar from "../navigation-bar/NavigationBar"
import { useState } from "react"

export default function Layout(props) {
  const [isCartOpened, setIsCartOpened] = useState(false)

  return (
    <div className="p-4">
      <NavigationBar onCartClick={() => setIsCartOpened(!isCartOpened)} />
      { isCartOpened ? <Cart /> : null }
      <div>
        { props.children }
      </div>
    </div>
  )
}