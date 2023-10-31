import { useState } from "react";
import "./styles.css";

export default function App() {
  const [piadas, setPiadas] = useState(
    "Once a cobra bit Chuck Norris' leg. After five days of excruciating pain, the cobra died."
  );
  const [piadasFavoritas, setPiadasFavoritas] = useState([]);

  function obterPiada() {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => {
        setPiadas(data.value);
      });
  }

  function adicionarFavoritos() {
    setPiadasFavoritas([...piadasFavoritas, piadas]);
  }

  function removerFavoritos(index) {
    const novaFavorites = [...piadasFavoritas];
    novaFavorites.splice(index, 1);
    setPiadasFavoritas(novaFavorites);
  }

  return (
    <div className="App">
      <h1>Chuck Norris Jokes</h1>
      <p> {piadas} </p>
      <button onClick={obterPiada}> Gerar nova piada</button>
      {" | "}
      <button onClick={adicionarFavoritos}> Adicionar aos favoritos</button>
      <ul>
        {piadasFavoritas.map((favorite, index) => (
          <li key={index}>
            {favorite}{" "}
            <button onClick={() => removerFavoritos(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
