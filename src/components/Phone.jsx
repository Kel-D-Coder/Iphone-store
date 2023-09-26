import { useContext } from "react";
import { cartContext } from "../provider/context";

export const Phone = ({ phone }) => {
    const { add } = useContext(cartContext)
    
    const addToCart = () => {
        add(phone)
    }

    return (
      <div>
        <div className="flex flex-col items-center border mt-10 py-3 ml-10">
          <img src={phone.image} alt="" className="w-80 h-80" />
          <p>{phone.name}</p>
          <p>${phone.price}</p>
          <button
            className="bg-blue-300 py-2 px-2 rounded-3xl hover:text-white mt-3"
            onClick={addToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
    );
}