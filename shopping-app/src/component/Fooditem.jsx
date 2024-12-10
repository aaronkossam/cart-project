import { useState } from "react";
import PropTypes from "prop-types";
import { useCart } from "../hooks/useCart";

const Fooditem = ({ id, name, description, image, price }) => {
  const [show, setShow] = useState(false);
  const { addToCart } = useCart();
  const { removeFromCart } = useCart();

  // const [count, setCount] = useState(0);

  // const Handleclick = () => {
  //   setCount(count + 1);
  // };

  // const Handleclick1 = () => {
  //   setCount(count - 1);
  // };
  // console.log(count);

  return (
    <div className=" grid  justify-center">
      <div>
        <div className=" grid">
          <img
            className=" rounded-md  w-80 h-60 lg:w-40 lg:h-32"
            src={image}
            alt=""
          />

          <div
            className="border-2 font-bold p-3 text-center -mt-6 mr-14 ml-11 rounded-full   bg-orange-900 border-orange-900 text-white"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
          >
            {show ? (
              <div className="w-full h-full font-bold flex gap-10  justify-between text-white">
                <img
                  // onClick={() => Addtocart(name)}
                  onClick={() =>
                    addToCart({
                      image,
                      id,
                      name,
                      description,
                      count: 1,
                      price,
                    })
                  }
                  src="/public/images/icon-increment-quantity.svg"
                  alt=""
                />

                <img
                  onClick={() =>
                    removeFromCart({
                      id,
                      image,
                      name,
                      description,
                      count: -1,
                      price,
                    })
                  }
                  // onClick={() => Removefromcart(name)}
                  src="/public/images/icon-decrement-quantity.svg"
                  alt=""
                />
              </div>
            ) : (
              <div style={{ fontSize: "0.6rem" }} className=" ">
                add to cart{" "}
              </div>
            )}
          </div>
        </div>
        <p className=" mt-7  italic">{description}</p>
        <p className=" font-extrabold text-xm">{name}</p>
        <p className=" font-extrabold text-xl text-orange-900 mb-5">{price}</p>
      </div>
      <div></div>
    </div>
  );
};
Fooditem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string,
};

export default Fooditem;
