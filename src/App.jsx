import Header from "./Components/Header/Header";
import Mainbody from "./Components/Main/Mainbody";
import { CartProvider } from "./Context/Context";

function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <Mainbody />
      </CartProvider>
    </>
  );
}

export default App;
