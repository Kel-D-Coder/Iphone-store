import { useContext } from "react";
import { cartContext } from "../provider/context";

export const CartPhones = ({ phone }) => {
    const { remove } = useContext(cartContext)
    

    return (
      <div className="flex flex-col items-center">
        <img src={phone.image} alt="" className="w-80 h-80" />
        <p className="font-bold">{phone.name}</p>
        <p className="font-medium">${phone.price}</p>
        <button
          className="bg-red-500 border py-2 px-2 rounded-md hover:bg-white hover:border-red-500 hover:text-black"
          onClick={() => remove(phone)}
        >
          Remove
        </button>
      </div>
    );
}