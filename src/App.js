import React, { useState, useEffect } from "react";
import api from "./services/api";
import "./App.css";
import Header from "./components/Header";

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("/repositories").then((response) => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    //setProjects([...projects, `Novo projeto ${Date.now()}`]);
    const response = await api.post("/repositories", {
      title: `Novo projeto ${Date.now()}`,
      url: "url",
      techs: ["node", "native"],
    });
    setProjects([...projects, response.data]);
  }

  return (
    <>
      <Header title="Conteudo de React" />
      <ul>
        {projects.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
      <button type="button" onClick={handleAddProject}>
        Adicionar projeto
      </button>
    </>
  );
}
