import { RepositoryItem } from "./RepositoryItem";

import React, { useState, useEffect } from "react";

import "../styles/repositories.scss";

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  // Chamando a API do GitHub
  useEffect(() => {
    fetch("https://api.github.com/users/GersonRocha9/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data))
      .catch((error) => console.log(error));
  }, []);
  // Array vazio no final para que a função seja executada apenas uma vez

  return (
    <section className="repository-list">
      <h1>My GitHub Repo List</h1>

      <ul>
        {/* map percorre cada repositório e pega as infos q precisa no RepositoryItem */}
        {repositories.map((repository) => (
          <RepositoryItem key={repository.id} repository={repository} />
          // key = identificador unico para cada elemento
        ))}
      </ul>
    </section>
  );
}
