import "./App.css";
import CartContextProvider from "./component/context/CartContextProvider";
import Landingpage from "./component/Landingpage";
import Mycart from "./component/Mycart";

function App() {
  return (
    <CartContextProvider>
      <Landingpage />
      {/* <Mycart /> */}
    </CartContextProvider>
  );
}

export default App;
