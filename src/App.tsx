import { useState } from "react";
import "./App.css";
import { Nodo, NodoT } from "./components/Nodo";

const App: React.FunctionComponent<{}> = () => {
  const [listNodo, setListNodo] = useState<NodoT[]>([
    {
      id: "001",
      descrizione: "Root",
    },
  ]);

  const addNewNodo = (nodo: NodoT): void => {
    const newNodo = [...listNodo, nodo];
    setListNodo(newNodo);
  };

  return (
    <div>
      {listNodo &&
        listNodo.map((_, index) => (
          <Nodo
            key={`Nodo-index${index}`}
            id={_.id}
            descrizione={_.descrizione}
            addNodo={addNewNodo}
          />
        ))}
    </div>
  );
};

export default App;
