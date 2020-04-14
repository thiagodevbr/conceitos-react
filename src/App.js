import React, { useState } from "react";
import "./App.css";
import backgroundImage from "./assets/background.jpg";
import Header from "./components/Header";

export default function App() {
  const [projects, setProjects] = useState([
    "Desenvolvimento APP",
    "FrontEnd React",
  ]);

  function handleAddProject() {
    setProjects([...projects, `Novo projeto ${Date.now()}`]);
    console.log(projects);
  }

  return (
    <>
      <Header title="Conteudo de React" />
      <img src={backgroundImage} alt="Background" />
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
