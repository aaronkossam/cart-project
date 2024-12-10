// src/Components/Header.js

import { useCart } from "../hooks/useCart";
function Mycart() {
  const { cartItems } = useCart();
  // console.log(cartItems.cartItems);
  console.log(cartItems);

  return (
    <div className=" ">
      <div className="  bg-slate-100 lg:mt-10  pb-64 shadow-md   text-orange-700 text-xl  ml-3 mr-3 pl-5 pt-3 rounded mb-7  lg:ml-32 lg:mr-32 ">
        <p className=" font-extrabold">Your Cart ({cartItems.length})</p>
        {cartItems.length === 0 ? (
          <p className=" text-black "> your cart is empty</p>
        ) : (
          <div className=" text-black mt-4 ">
            {cartItems?.map((item) => (
              <div key={item.id}>
                {item.name}
                <div className=" mb-3">
                  {item.count}x {item.price}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Mycart;
