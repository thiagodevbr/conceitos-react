import React, { useState } from "react";
import Header from "./components/Header";

export default function App() {
  const [projects, setProjects] = useState([
    "Desenvolvimento APP",
    "FrontEnd React",
  ]);

  function handleAddProject() {
    setProjects([...projects, `Novo projeto ${Date.now()}`]);
    //projects.push(`Novo projeto ${Date.now()}`);
    console.log(projects);
  }

  return (
    <>
      <Header title="Conteudo de React" />
      <ul>
        {projects.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      <button type="button" onClick={handleAddProject}>
        Adicionar projeto
      </button>
    </>
  );
}
