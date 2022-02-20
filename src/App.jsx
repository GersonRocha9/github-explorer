import React from "react";

// imutabilidade = não altera o estado do componente

import { RepositoryList } from "./components/RepositoryList";

import "./styles/global.scss";

const App = () => {
  return (
    <>
      <RepositoryList />
    </>
  );
};

export default App;
