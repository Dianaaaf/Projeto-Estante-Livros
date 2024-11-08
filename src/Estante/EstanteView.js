import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function EstanteView() {
  const navigate = useNavigate();

  const [estantes, setEstantes] = useState({
    estouLendo: ["Livro 1"],
    queroLer: ["Livro 2"],
    jaLido: ["Livro 3"],
  });

  const moverLivro = (livro, estanteAtual, novaEstante) => {
    setEstantes((prevEstantes) => {
      const atualizado = { ...prevEstantes };
      atualizado[estanteAtual] = atualizado[estanteAtual].filter(
        (l) => l !== livro
      );
      atualizado[novaEstante] = [...atualizado[novaEstante], livro];
      return atualizado;
    });
  };

  const renderizarEstante = (livros, estante) => (
    <div>
      <h2>
        {estante === "estouLendo"
          ? "Estou lendo"
          : estante === "queroLer"
          ? "Quero ler"
          : "Já lido"}
      </h2>
      <ul>
        {livros.map((livro) => (
          <li key={livro}>
            {livro}
            <select
              value={estante}
              onChange={(e) => moverLivro(livro, estante, e.target.value)}
            >
              <option value="estouLendo">Estou lendo</option>
              <option value="queroLer">Quero ler</option>
              <option value="jaLido">Já lido</option>
            </select>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div>
      <h1>Minha Biblioteca</h1>
      {renderizarEstante(estantes.estouLendo, "estouLendo")}
      {renderizarEstante(estantes.queroLer, "queroLer")}
      {renderizarEstante(estantes.jaLido, "jaLido")}

      <button
        onClick={async () => {
          navigate("/PesquisaView.js");
        }}
      >
        Página de Pesquisa
      </button>
    </div>
  );
}
