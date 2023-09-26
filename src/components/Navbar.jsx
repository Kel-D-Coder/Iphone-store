import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex justify-around bg-gray-300 py-5 text-lg text-white">
      <Link to="/">Home</Link>
      <Link to="cart">Cart</Link>
    </div>
  );
};
