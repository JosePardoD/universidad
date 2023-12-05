import React, { useContext, useEffect, useState } from "react";

import Transaction from "./Transaction";
import "./ClientPanel.css";

function ClientPanel() {
  async function fetchData() {
    const res = await fetch("http://localhost:6001/api/mascotas");
    const documents = await res.json();
    setDocuments(documents);
    console.log(documents);
  }



  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="user-panel">
      <div className="container">
        <div className="balance card flex">
          <h1>Mascotas :</h1>
          <p>Bienvenido</p>
        </div>

        <div className="transactions card">
          {documents.map((document) => (
            <Transaction data={document} key={document._id} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default ClientPanel;
