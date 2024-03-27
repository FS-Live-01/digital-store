import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../layouts/PageLayout";
import Home from './../pages/Home';
import Produtos from "../pages/Produtos";
import MeusPedidos from './../pages/MeusPedidos';
import Login from "../pages/Login";

const Paths = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<PageLayout />}>
            <Route index element={<Home />} />
            <Route path={"/produtos"} element={<Produtos />} />
            <Route path={"/meus-pedidos"} element={<MeusPedidos />} />
            <Route path={"/login"} element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Paths;