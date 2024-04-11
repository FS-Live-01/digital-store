import { useEffect, useState } from "react";
import styled from "styled-components";
import Produto from "../../components/Produto";

const ProdutosContainer = styled.section`
  padding: 40px 100px 0 100px;
  background-color: #F9F8FE;
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  & .ordenacao{
    width: 100%;
  }
  & .filtros{
    width: 300px;
    background-color: #FFF;
    border-radius: 4px;
    padding: 30px;
    & h6{
      color: #474747;
      font-size: 14px;
      line-height: 22px;
      &:first-of-type{
        font-size: 16px;
        line-height: 24px;
      }
    }
    & hr{
      background-color: #CCC;
      height: 1px;
      margin: 20px 0;
    }
    & ul{
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 16px;
      & li label{
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 14px;
        color: #474747;
        line-height: 22px;
        cursor: pointer;
        & input{
          width: 22px;
          height: 22px;
          accent-color: #C92071;
          cursor: pointer;
        }
      }
    }
  }
  & .produtos{
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    & > div{
      width: calc(33.333% - 10px);
    }
  }
  
  /* & :where(.ordenacao, .filtros, .produtos){
    background-color: blue;
  } */
`;

const Produtos = () => {
  
  const [marcas, setMarcas] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [generos, setGeneros] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [filtros, setFiltros] = useState([]);
  const [produtosFiltrados, setProdutosFiltrados] = useState([]);

  function selecionarFiltro(value){
    if(filtros.includes(value)){
      setFiltros([...filtros.filter(valor => valor != value.toLowerCase())]);
      return;
    }
    setFiltros([...filtros, value.toLowerCase()]);
  }

  async function buscarMarcas(){
    const request = await fetch('http://localhost:3000/marcas');
    const response = await request.json();
    setMarcas(response);
  }

  async function buscarCategorias(){
    const request = await fetch('http://localhost:3000/categorias');
    const response = await request.json();
    setCategorias(response);
  }

  async function buscarGeneros(){
    const request = await fetch('http://localhost:3000/generos');
    const response = await request.json();
    setGeneros(response);
  }

  async function buscarProdutos(){
    const request = await fetch('http://localhost:3000/produtos');
    const response = await request.json();
    setProdutos(response);
  }

  useEffect(() => {
    buscarMarcas();
    buscarCategorias();
    buscarGeneros();
    buscarProdutos();
  }, []);

  useEffect(() => {
    if(filtros.length > 0){
      setProdutosFiltrados(produtos.filter(p => filtros.includes(p.marca.nome.toLowerCase()) || filtros.includes(p.categoria.nome.toLowerCase()) || filtros.includes(p.genero.toLowerCase()) || filtros.includes(p.estado.toLowerCase())))
      return;
    }
    setProdutosFiltrados(produtos);
  }, [filtros, produtos]);

  return (
    <ProdutosContainer>
      <div className="ordenacao">Ordenação</div>
      <div className="filtros">
        <h6>Filtrar por</h6>
        <hr />
        <h6>Marcas</h6>
        <ul>
          {
            marcas && marcas.map(marca => (
              <li key={`m${marca.id}`}>
                <label htmlFor={`m${marca.id}`}>
                  <input 
                    type="checkbox" 
                    id={`m${marca.id}`} 
                    onClick={() => selecionarFiltro(marca.nome)}
                  />
                  {marca.nome}
                </label>
              </li>
            ))
          }
        </ul>
        <h6>Categorias</h6>
        <ul>
          {
            categorias && categorias.map(categoria => (
              <li key={`c${categoria.id}`}>
                <label htmlFor={`c${categoria.id}`}>
                  <input 
                    type="checkbox" 
                    id={`c${categoria.id}`} 
                    onClick={() => selecionarFiltro(categoria.nome)}
                  />
                  {categoria.nome}
                </label>
              </li>
            ))
          }
        </ul>
        <h6>Gêneros</h6>
        <ul>
          {
            generos && generos.map(genero => (
              <li key={`g${genero.id}`}>
                <label htmlFor={`g${genero.id}`}>
                  <input 
                    type="checkbox" 
                    id={`g${genero.id}`} 
                    onClick={() => selecionarFiltro(genero.nome)}
                  />
                  {genero.nome}
                </label>
              </li>
            ))
          }
        </ul>
        <h6>Estado</h6>
        <ul>
          <li>
            <label htmlFor="eNovo">
              <input 
                id="eNovo" 
                type="checkbox" 
                // name="estado"
                onClick={() => selecionarFiltro('novo')}
              /> Novo
            </label>
          </li>
          <li>
            <label htmlFor="eUsado">
              <input 
                id="eUsado"
                type="checkbox" 
                // name="estado"
                onClick={() => selecionarFiltro('usado')}
               /> Usado
            </label>
          </li>
        </ul>
      </div>
      <div className="produtos">
        {
          produtosFiltrados && produtosFiltrados.map(produto => (
            <Produto 
              key={`p${produto.id}`}
              nome={produto.nome}
              categoria={produto.categoria.nome}
              imagem={produto.imagem}
              preco={produto.preco}
              desconto={produto.desconto}
            />
          ))
        }
      </div>
    </ProdutosContainer>
  );
}

export default Produtos;