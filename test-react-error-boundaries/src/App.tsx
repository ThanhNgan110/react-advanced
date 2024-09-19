import { useState } from "react";
import CartDescription from "./components/CartDescription"
import CheckoutButton from "./components/CheckoutButton"
import CreditCardInput from "./components/CreditCardInput"



function App() {  // Tạo dữ liệu giả
  const [items] = useState([
    { id: "1", name: "Product 1", quantity: 2 },
    { id: "2", name: "Product 2", quantity: 1 },
  ]);

  const [id] = useState("cart123"); // Giả định ID giỏ hàng là 'cart123'


  return (
    <>
     	<form>
			<CartDescription items={items} />
      <CreditCardInput/>
			<CheckoutButton cartId={id} />
		</form>
    </>
  )
}

export default App
