import { useState } from "react";
import "./App.css";
import { Nodo, NodoT } from "./components/Nodo";

type ListNodoT = NodoT & {
  sottoNodi?: NodoT[];
};

const App: React.FunctionComponent<{}> = () => {
  const [listNodo, setListNodo] = useState<ListNodoT[]>([
    {
      livello: 0,
      id: "001",
      descrizione: "Root",
      sottoNodi: [
        {
          livello: 0,
          id: "001-1",
          descrizione: "Milano",
        },
      ],
    },
  ]);

  const addNewNodo = (nodo: NodoT): void => {
    const newNodo = [...listNodo, nodo];
    setListNodo(newNodo);
  };

  return (
    <div>
      {listNodo &&
        listNodo.map((_, nodoIndex) => (
          <div>
            <Nodo
              livello={_.livello}
              key={`Nodo-index${nodoIndex}`}
              id={_.id}
              descrizione={_.descrizione}
              addNodo={addNewNodo}
            />
            <ul>
              {_.sottoNodi &&
                _.sottoNodi.map((_, sottoNodoIndex) => (
                  <li key={`sottoNodo${sottoNodoIndex}`}>
                    <Nodo
                      livello={_.livello}
                      id={_.id}
                      descrizione={_.descrizione}
                      addNodo={addNewNodo}
                    ></Nodo>
                  </li>
                ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default App;
