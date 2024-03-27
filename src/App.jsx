import { useState } from "react";
import Paths from "./routes";
import { LoginContext } from "./contexts/LoginContext";

const App = () => {
  const [estaLogado, setEstaLogado] = useState(true);
  const [produtos, setProdutos] = useState([]);
  
  return (
    <>
      <LoginContext.Provider value={{ estaLogado, setEstaLogado, produtos, setProdutos }}>
        <Paths />
      </LoginContext.Provider>
    </>
  );
}

export default App;