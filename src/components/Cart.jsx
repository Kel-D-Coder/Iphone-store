import { useContext } from "react";
import { cartContext } from "../provider/context";
import { CartPhones } from "./CartPhones";

const cart = () => {
  const { cartState } = useContext(cartContext)
  
  return (
    <div>
      {cartState.map((phone, i) => {
        return (
          <CartPhones phone={phone} key={i} />
        )
      })}
    </div>
  )
};
export default cart;