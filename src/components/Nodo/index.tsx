import { useState } from "react";
import { NodoForm } from "../NodoForm";
import "./index.css";

export type NodoT = {
  id: string;
  descrizione: string;
};

type NodoProp = NodoT & {
  addNodo: (nodo: NodoT) => void;
};

const Nodo: React.FunctionComponent<NodoProp> = ({
  id,
  descrizione,
  addNodo,
}) => {
  const [showForm, setShowForm] = useState(false);

  const handleForm = (nodoCorrente: NodoT) => {
    setShowForm(false);
    addNodo(nodoCorrente);
  };

  return (
    <div className="containerColumn">
      <div className="containerRow margin5px">
        <div className="marginright5px">
          <button onClick={() => setShowForm(!showForm)}>
            {showForm ? "-" : "+"}
          </button>
        </div>
        <div>
          {id} - {descrizione}
        </div>
      </div>
      <div>{showForm && <NodoForm handleForm={handleForm}></NodoForm>}</div>
    </div>
  );
};

export { Nodo };
