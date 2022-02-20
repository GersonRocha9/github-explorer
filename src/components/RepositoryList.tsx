import { RepositoryItem } from "./RepositoryItem";

import React, { useState, useEffect } from "react";

import "../styles/repositories.scss";

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

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
        {repositories.map((repository: Repository) => (
          <RepositoryItem key={repository.name} repository={repository} />
        ))}
      </ul>
    </section>
  );
}
