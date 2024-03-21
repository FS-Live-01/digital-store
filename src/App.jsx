import { useState } from "react";
import Paths from "./routes";
import { LoginContext } from "./contexts/LoginContext";

const App = () => {
  const [estaLogado, setEstaLogado] = useState(false);
  
  return (
    <>
      <LoginContext.Provider value={{ estaLogado, setEstaLogado }}>
        <Paths />
      </LoginContext.Provider>
    </>
  );
}

export default App;