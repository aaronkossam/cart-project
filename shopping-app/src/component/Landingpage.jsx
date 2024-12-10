import { useCart } from "../hooks/useCart";
import Fooditem from "./Fooditem";
import Mycart from "./Mycart";

const Landingpage = () => {
  const { cartItems } = useCart();
  console.log(cartItems);
  const foodlist = [
    {
      id: "1",
      name: "waffle with Berries",
      description: " waffle",
      price: "$6.50",
      image: "/src/assets/image-waffle-desktop.jpg",
      quantity: "1",
    },

    {
      id: "2",
      name: "vanilla Bean creme Brulee",
      description: " creme Brulee",
      price: "$7.50",
      image: "/src/assets/image-creme-brulee-desktop.jpg",
      quantity: "1",
    },
    {
      id: "3",
      name: "macaron Mix of five ",
      description: " macaron",
      price: "$8.00",
      image: "/src/assets/image-macaron-desktop.jpg",
      quantity: "1",
    },

    {
      id: "4",
      name: "classic Tiramisu",
      description: " Tiramisu",
      price: "$5.50",
      image: "/src/assets/image-tiramisu-desktop.jpg",
      quantity: "1",
    },
    {
      id: "5",
      name: "pitacho baklava",
      description: " baklava",
      price: "$4.00",
      image: "/src/assets/image-baklava-desktop.jpg",
      quantity: "1",
    },

    {
      id: "6",
      name: "Lemon Meringue Pie",
      description: " Meringue Pie",
      price: "$5.00",
      image: "/src/assets/image-meringue-desktop.jpg",
      quantity: "1",
    },
    {
      id: "7",
      name: "Red velvet cake",
      description: "cake",
      price: "$4.50",
      image: "/src/assets/image-cake-desktop.jpg",
      quantity: "1",
    },

    {
      id: "8",
      name: "salted caramel ",
      description: "Brownie",
      price: "$5.50",
      image: "/src/assets/image-brownie-desktop.jpg",
      quantity: "1",
    },

    {
      id: "9",
      name: "Vanilla Panna Cotta",
      description: "Panna Cotta",
      price: "$6.50",
      image: "/image-panna-cotta-desktop.jpg",
      quantity: "1",
    },
  ];

  // const [cart, setCart] = useState([]);

  // console.log("cart =>", cart);

  return (
    <div className=" lg:grid grid-cols-2 lg:ml-12 ">
      <div>
        <h1 className=" font-extrabold text-3xl ml-8 lg:ml-4  mt-6 mb-6">
          Deserts
        </h1>
        <div className=" lg:grid grid-cols-3 gap-3">
          {foodlist.map((item) => (
            <div key={item.id}>
              <Fooditem
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                description={item.description}
                quantity={item.quantity}
              />
            </div>
          ))}
        </div>
      </div>
      <Mycart />
    </div>
  );
};

export default Landingpage;
