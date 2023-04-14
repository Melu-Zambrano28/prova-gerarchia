import { useState } from "react";
import { NodoForm } from "../NodoForm";
import "./index.css";

export type NodoT = {
  livello: number;
  id: string;
  descrizione: string;
};

type NodoProp = NodoT & {
  children: NodoT[];
};

const Nodo: React.FunctionComponent<NodoProp> = ({
  id,
  descrizione,
  children,
}) => {
  const [showForm, setShowForm] = useState(false);
  const [nodoCorrente, setNodoCorrente] = useState<NodoT>();
  const [nodi, setNodi] = useState<NodoT[]>(children);

  const handleForm = (nodo: NodoT) => {
    setShowForm(false);
    setNodi([...nodi, nodo]);
    setNodoCorrente(nodo);
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
      {nodi.length > 0 ? (
        <ul>
          {nodi.map((_, index) => (
            <li key={`sottoNodi${index}`}>
              <Nodo
                livello={index}
                id={_.id}
                descrizione={_.descrizione}
                children={[]}
              ></Nodo>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export { Nodo };
